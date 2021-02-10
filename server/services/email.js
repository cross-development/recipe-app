//Packages
const sgMail = require('@sendgrid/mail');

async function sendEmail(recipient, verificationToken) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const msg = {
		to: recipient,
		from: process.env.EMAIL_FROM,
		subject: 'Activate Your SuperCook Account',
		html: `
		Hi there!</br>

		Thanks for signing up for a Free Lifetime Account at SuperCook!
		<a href="http://localhost:3001/api/auth/verify/${verificationToken}">Click here</a>
		to activate your free account and access our website.</br>

		If clicking the activation link above doesn't seem to work, you can copy and paste 
		the full link below into your browser's address bar.</br>

		<strong>
		<a href="http://localhost:3001/api/auth/verify/${verificationToken}">
		http://localhost:3001/api/auth/verify/${verificationToken}</a>
		</strong>`,
	};

	await sgMail.send(msg);
}

module.exports = sendEmail;
