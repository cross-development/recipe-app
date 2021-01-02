const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
});

module.exports = model('User', userSchema);
