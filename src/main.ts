import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";

import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
    const adapter = new FastifyAdapter();

    const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

    const config = app.get(ConfigService);

    const port = config.get("APP_PORT");

    const logger = new Logger("Server");

    await app.listen(port, "0.0.0.0", () => logger.log("Server successfully started"));
}

bootstrap();