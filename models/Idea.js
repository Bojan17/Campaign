const mongoose = require('mongoose');
const User = require("./user");

const ideaSchema = new mongoose.Schema({
  campaign_name: String,
  description: String,
  minimumContribution: String,
  manager: String,
  wallet: String
});

const Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea;
