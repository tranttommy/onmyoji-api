require('dotenv').config();
require('./lib/utils/dbConnect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 2309;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}.`);
});
