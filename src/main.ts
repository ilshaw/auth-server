import { NestFactory } from "@nestjs/core"

import { ThrottlerExceptionFilter } from "@filters/throttler-exception.filter"
import { ExceptionInterceptor } from "@interceptors/exception.interceptor"
import { ClientExceptionFilter } from "@filters/client-exception.filter"
import { ServerExceptionFilter } from "@filters/server-exception.filter"
import { ResponseInterceptor } from "@interceptors/response.interceptor"
import { EveryExceptionFilter } from "@filters/every-exception.filter"
import { ConfigService } from "@services/config.service"
import { AppModule } from "@modules/app.module"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalFilters(
        new EveryExceptionFilter(),
        new ThrottlerExceptionFilter(),
        new ClientExceptionFilter(),
        new ServerExceptionFilter()
    )

    app.useGlobalInterceptors(new ExceptionInterceptor(), new ResponseInterceptor())

    const config = app.get(ConfigService)

    const port = config.getApplicationPort()

    await app.listen(port)
}

bootstrap()
