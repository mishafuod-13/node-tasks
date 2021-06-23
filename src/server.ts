const { PORT , HOST} = require('./common/config.ts');
const app = require('./app');


app.listen(PORT, () =>
  process.stdout.write(`App is running on http://${HOST}:${PORT}\n`)
);
