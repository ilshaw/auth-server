import { NestFactory } from "@nestjs/core"

import { ConfigService } from "@services/config.service"
import { AppModule } from "@modules/app.module"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = app.get(ConfigService)

    const port = config.getApplicationPort()

    await app.listen(port)
}

bootstrap()
