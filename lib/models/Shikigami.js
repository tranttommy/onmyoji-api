const mongoose = require('mongoose');

const shikigamiSchema = new mongoose.Schema(
  {
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
    image_url: String
  },
  {
    versionKey: false
  }
);

shikigamiSchema.pre('save', function(next) {
  this.name = this.name.toLowerCase().replace(/\s/g, '-');
  this.image_url = `https://res.cloudinary.com/tasrive/image/upload/v1559281766/onmyoji/shikigami/${this.name}.png`;
  next();
});

const Shikigami = mongoose.model('Shikigami', shikigamiSchema);

module.exports = Shikigami;
