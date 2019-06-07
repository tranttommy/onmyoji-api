const chance = require('chance').Chance();
const Shikigami = require('../../lib/models/Shikigami');

function seedShikigami(count = 25) {
  const shikigamis = [...Array(count)].map(() => ({
    name: chance.name(),
    rarity: chance.natural({ max: 5 }),
    image_url: chance.avatar()
  }));

  return Shikigami.create(shikigamis);
}

module.exports = seedShikigami;
