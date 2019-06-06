const Shikigami = require('../models/Shikigami');
const { Router } = require('express');

module.exports = Router()
  .post('/', async (req, res, next) => {
    const { name, rarity, skins } = req.body;
    try {
      res.send(await Shikigami.create({ name, rarity, skins }));
    } catch(e) {
      next(e);
    }
  });
