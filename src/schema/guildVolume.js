const { Schema, model } = require("mongoose");

const guildVolume = new Schema({
  Guild: {
    type: String,
    required: true,
  },
  Volume: {
    type: int,
    required: 100,
  },
  VoiceChannel: {
    type: String,
    required: false,
  },
});
module.exports = model("volume", guildVolume);
