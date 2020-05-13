const mongoose = require("mongoose");

const Player = mongoose.model("Player");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const players = await Player.paginate({}, { page, limit: 10 });

    return res.json(players);
  },

  async show(req, res) {
    const player = await Player.findById(req.params.id);
    return res.json(player);
  },

  async store(req, res) {
    const player = await Player.create(req.body);
    return res.json(player);
  },

  async update(req, res) {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(player);
  },

  async destroy(req, res) {
    const player = await Player.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
