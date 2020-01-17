
const mongoose = require('mongoose');

const voterIDSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });



const VOTERID = mongoose.model('Users', voterIDSchema);

module.exports = VOTERID;