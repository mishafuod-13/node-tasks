"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
async function bootstrap() {
    const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
    const PORT = process.env.PORT || 4000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    await app.listen(PORT, () => process.stdout.write(`App is running on port:${PORT}\n`));
}
bootstrap();
//# sourceMappingURL=main.js.map