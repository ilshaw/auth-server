import { APP_INTERCEPTOR, APP_FILTER } from "@nestjs/core";
import { Module } from "@nestjs/common";

import { ClientExceptionInterceptor } from "@core/interceptors/client-exception.interceptor";
import { ClientResponseInterceptor } from "@core/interceptors/client-response.interceptor";
import { ClientExceptionFilter } from "@core/filters/client-exception.filter";
import { ServerExceptionFilter } from "@core/filters/server-exception.filter";
import { ExceptionModule } from "@core/modules/exception.module";
import { ResponseModule } from "@core/modules/response.module";
import { ConfigModule } from "@core/modules/config.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Module({
    imports: [
        ExceptionModule,
        ResponseModule,
        ConfigModule,
        PrismaModule,
        CqrsModule
    ],
    providers: [
        {
            useClass: ClientResponseInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ClientExceptionInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ClientExceptionFilter,
            provide: APP_FILTER
        },
        {
            useClass: ServerExceptionFilter,
            provide: APP_FILTER
        }
    ]
})
export class AppModule {}