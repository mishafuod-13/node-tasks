import checkUserAdminExist from "./resources/helpers/check.user";
const { PORT , HOST} = require('./common/config.ts');
const app = require('./app');


app.listen(PORT, async () => {
  process.stdout.write(`App is running on http://${HOST}:${PORT}\n`);
  await checkUserAdminExist()
  }
);


