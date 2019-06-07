const Shikigami = require('../models/Shikigami');
const { Router } = require('express');

module.exports = Router()
  .post('/', async (req, res, next) => {
    const { name, rarity } = req.body;
    try {
      res.send(await Shikigami.create({ name, rarity }));
    } catch(e) {
      next(e);
    }
  })
  
  .get('/', async (req, res, next) => {
    try {
      res.send(await Shikigami.find().lean());
    } catch(e) {
      next(e);
    }
  });
