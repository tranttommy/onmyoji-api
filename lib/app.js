const express = require('express');
const app = express();
const dbConnectionState = require('./middleware/db-connection-state');

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

app.use('/api/v1/shikigami', dbConnectionState, require('./routes/shikigamis'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
