require('dotenv').config();
require('../utils/data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('shikigami routes', () => {
  it('creates a shikigami', () => {
    return request(app)
      .post('/api/v1/shikigami')
      .send({
        name: 'Lord Arakawa',
        rarity: 4
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'lord-arakawa',
          rarity: 4,
          image_url: 'https://res.cloudinary.com/tasrive/image/upload/v1559281766/onmyoji/shikigami/lord-arakawa.png'
        });
      });
  });

  it('gets all shikigami', async () => {
    const res = await request(app).get('/api/v1/shikigami');
    expect(res.body).toHaveLength(25);
    expect(res.body).toEqual(expect.any(Array));
  });
});
