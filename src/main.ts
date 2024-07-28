import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";

import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
    const adapter = new FastifyAdapter();

    const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

    const logger = new Logger("Server");

    await app.listen(8080, "0.0.0.0", () => logger.log("Server successfully started"));
}

bootstrap();