const mongoose = require('mongoose')
const { stringify } = require('querystring')

const goalSchema = mongoose.Schema({
    text: {type: String,
    required: [true, 'Please add a text value']}
}, {
    timestamps: true
},
{collection: 'goalapp'})

module.exports = mongoose.model('Goal', goalSchema)