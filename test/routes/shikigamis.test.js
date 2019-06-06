require('dotenv').config();
require('../utils/data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('shikigami routes', () => {
  it('creates a shikigami', () => {
    return request(app)
      .post('/api/v1/shikigami')
      .send({
        name: 'Ootengu',
        rarity: 4,
        skins: [
          {
            name: 'Base',
            image_url: 'https://res.cloudinary.com/tasrive/image/upload/v1559281766/onmyoji/shikigami/ootengu.png'
          }
        ]
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Ootengu',
          rarity: 4,
          skins: [
            {
              name: 'Base',
              image_url: 'https://res.cloudinary.com/tasrive/image/upload/v1559281766/onmyoji/shikigami/ootengu.png'
            }
          ]
        });
      });
  });
});
