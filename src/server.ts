import checkUserAdminExist from "./resources/helpers/check.user";
const dotenv = require('dotenv');
const PATH = require('path');
const app = require('./app');

dotenv.config({
  path: PATH.join(__dirname, '../../.env')
});

app.listen(process.env["PORT"], async () => {
  process.stdout.write(`App is running on http://${process.env["HOST"]}:${process.env["PORT"]}\n`);
  await checkUserAdminExist()
  }
);


