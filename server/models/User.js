const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    isAnonymous: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
