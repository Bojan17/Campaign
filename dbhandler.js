const mongoose = require('mongoose');
const Idea = require('./models/Idea');

module.exports = server => {
  server.post('/api/newcampaign', async (req, res) => {
    const { minimumContribution, campaign_name, description, manager, wallet } = req.body;
    const idea = new Idea({
      minimumContribution,
      campaign_name,
      description,
      manager,
      wallet
    });

    try {
      await idea.save();

      res.send(idea);
    } catch (err) {
      res.status(422).send(err);
    }
  });


  server.get('/api/campaigns', async (req,res) => {
    const list = await Idea.find({});
    console.log(list);
    res.send(list.data);
  })
}
