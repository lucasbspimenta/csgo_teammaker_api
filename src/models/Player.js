const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PlayerSchema = new mongoose.Schema({
  discordid: { type: String, required: true },
  name: { type: String, required: true },
  rank: { type: String, required: true },
  gclevel: { type: String, required: true },
  roles: { type: Date, required: true },
  schedule: { type: String, required: true },
  teamid: { type: String, required: true, default: 1 },
  teamconfirm: { type: Boolean, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

PlayerSchema.plugin(mongoosePaginate);

mongoose.model("Player", PlayerSchema);
