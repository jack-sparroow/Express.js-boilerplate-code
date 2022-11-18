const mongoose = require("mongoose")

const userModel = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    password: { type: String },
});


module.exports = {
    userModel
}