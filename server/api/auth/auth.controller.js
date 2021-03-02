//Models
const userModel = require('../users/user.model');
//Crypt
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Services
const sendEmail = require('../../services/email');

//User authentication
async function singUpUser(req, res) {
	const existingUser = await userModel.findOne({ email: req.body.email });

	if (existingUser) {
		return res.status(409).json({ message: 'User with such email already exists' });
	}

	const pwdHash = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUND));
	const verificationToken = await crypto.randomBytes(16).toString('hex');

	const user = await userModel.create({ ...req.body, password: pwdHash, verificationToken });
	const { username, email } = user;

	await sendEmail(email, verificationToken);

	return res.status(201).json({ username, email, verificationToken });
}

async function signInUser(req, res) {
	const { email, password } = req.body;

	const user = await userModel.findOne({ email });

	if (!user) {
		return res.status(403).json({ message: 'Email does not exist or password is wrong' });
	}

	const isUserPasswordCorrect = await bcrypt.compare(password, user.password);

	if (!isUserPasswordCorrect) {
		return res.status(403).json({ message: 'Email does not exist or password is wrong' });
	}

	const userToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
		expiresIn: process.env.JWT_ACCESS_EXPIRE_TIME,
	});

	await userModel.findByIdAndUpdate(user._id, { $set: { token: userToken } });

	const response = {
		user: { username: user.username, email: user.email },
		token: userToken,
	};

	return res.status(200).json(response);
}

async function signOutUser(req, res) {
	await userModel.findByIdAndUpdate(req.user._id, { $set: { token: '' } });

	return res.status(204).send();
}

//The middleware validate user token
async function validateToken(req, res) {
	const authorizationHeader = req.get('Authorization') || '';
	const token = authorizationHeader.replace('Bearer ', '');

	try {
		const userId = await jwt.verify(token, process.env.JWT_SECRET_KEY).userId;
		const user = await userModel.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'Invalid user' });
		}

		if (user.token !== token) {
			return res.status(401).json({ message: 'Bearer auth failed' });
		}

		req.user = user;

		next();
	} catch (err) {
		return res.status(400).json({ message: 'No token provided' });
	}
}

//Email verification
async function verifyEmailToken(req, res) {
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
}

module.exports = {
	singUpUser,
	signInUser,
	signOutUser,
	validateToken,
	verifyEmailToken,
};
