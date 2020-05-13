const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const TeamSchema = new mongoose.Schema({
  discordid: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

TeamSchema.plugin(mongoosePaginate);

mongoose.model("Team", TeamSchema);
