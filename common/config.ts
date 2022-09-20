import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export default {
  PORT: process.env['PORT'],
  HOST: process.env['HOST'],
  NODE_ENV: process.env['NODE_ENV'],
  MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
  JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
  AUTH_MODE: process.env['AUTH_MODE'] === 'false',
  USER_ADMIN_PASSWORD: process.env['USER_ADMIN_PASSWORD'],
  USER_ADMIN_LOGIN: process.env['USER_ADMIN_LOGIN'],
};
