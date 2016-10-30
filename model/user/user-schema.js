const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt = require('bcrypt-nodejs');

//email no longer needed - username must be a unique email address
const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    bank_accounts: {type: Array},
    offers: {type: Array},
    requests: {type: Array},
    rating: {type: Number, min: 0, max: 5},
    avatar_url: {type: String},
    status: {type: String, enum: ['normal', 'suspended', 'banned'], required: true}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
