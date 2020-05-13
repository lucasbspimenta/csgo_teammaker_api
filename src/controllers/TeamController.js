const mongoose = require("mongoose");

const Team = mongoose.model("Team");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const teams = await Team.paginate({}, { page, limit: 10 });

    return res.json(teams);
  },

  async show(req, res) {
    const team = await Team.findById(req.params.id);
    return res.json(team);
  },

  async store(req, res) {
    const team = await Team.create(req.body);
    return res.json(team);
  },

  async update(req, res) {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(team);
  },

  async destroy(req, res) {
    const team = await Team.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
