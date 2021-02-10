//Models
const userModel = require('../users/user.model');
//Crypt
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Services
const sendEmail = require('../../services/email');

//User authentication
async function singUpUser(req, res, next) {
	try {
		const existedUser = await userModel.findOne({ email: req.body.email });

		if (existedUser) {
			return res.status(409).json({ message: 'Email in use' });
		}

		const pwdHash = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUND));
		const verificationToken = await crypto.randomBytes(16).toString('hex');

		const user = await userModel.create({ ...req.body, password: pwdHash, verificationToken });
		const { username, email, verificationToken } = user;

		await sendEmail(email, verificationToken);

		return res.status(201).json({ username, email, verificationToken });
	} catch (error) {
		next(error);
	}
}

async function signInUser(req, res, next) {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({ email });

		if (!user) {
			return res.status(401).json({ message: 'Email or password is wrong' });
		}

		const isUserPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isUserPasswordCorrect) {
			return res.status(401).json({ message: 'Email or password is wrong' });
		}

		const userToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
			expiresIn: process.env.EXPIRES_IN,
		});

		await userModel.findByIdAndUpdate(user._id, { $set: { token: userToken } });

		const response = {
			user: { username: user.username, email: user.email },
			token: userToken,
		};

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function signOutUser(req, res, next) {
	try {
		const { userId, token } = req.user;
		const user = await userModel.findById(userId);

		if (!user || user.token !== token) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		await userModel.findByIdAndUpdate(user._id, { $set: { token: '' } });

		return res.status(204).send();
	} catch (error) {
		next(error);
	}
}

//Email verification
async function verifyEmailToken(req, res, next) {
	try {
		const { verificationToken } = req.params;

		const user = await userModel.findOne({ verificationToken });

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		await userModel.findByIdAndUpdate(
			user._id,
			{ $unset: { verificationToken: '' }, $set: { isVerified: true } },
			{ new: true },
		);

		return res.status(200).send();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	singUpUser,
	signInUser,
	signOutUser,
	verifyEmailToken,
};
