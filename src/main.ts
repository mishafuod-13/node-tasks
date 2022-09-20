import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import * as YAML from 'yamljs';

async function bootstrap() {
  const swaggerDocument = YAML.load(path.join(__dirname, '../../doc/api.yaml'));

  const PORT = process.env.PORT || 4000;

  const app = await NestFactory.create(AppModule);

  app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  await app.listen(PORT, () =>
    process.stdout.write(`App is running on port:${PORT}\n`),
  );
}
try {
  bootstrap();
} catch (e) {
  console.log(e);
}
