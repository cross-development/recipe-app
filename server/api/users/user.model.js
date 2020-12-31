//Database
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	email: String,
	password: String,
	token: String,
});

module.exports = model('User', userSchema);
