const mongoose = require('mongoose');
const dbConnect = require('../../lib/utils/dbConnect');
const seedData = require('./seed-data');

beforeAll(() => {
  return dbConnect('mongodb://localhost:27017/test');
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData();
});

afterAll(() => {
  return mongoose.connection.close();
});
