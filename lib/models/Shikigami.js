const mongoose = require('mongoose');

const shikigamiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  rarity: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  skins: [
    {
      name: {
        type: String,
        required: true
      },
      image_url: {
        type: String,
        required: true
      },
      _id: false,
    }
  ]
},
{
  versionKey: false
});

const Shikigami = mongoose.model('Shikigami', shikigamiSchema);

module.exports = Shikigami;
