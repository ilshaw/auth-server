import { ConfigModule as NestConfigModule } from "@nestjs/config"
import { Global, Module } from "@nestjs/common"

import * as joi from "joi"

import { ConfigService } from "@services/config.service"

@Global()
@Module({
    imports: [
        NestConfigModule.forRoot({
            validationSchema: joi.object({
                REFRESH_COOKIE_SAME_SITE: joi.string().required(),
                REFRESH_COOKIE_HTTP_ONLY: joi.boolean().required(),
                REFRESH_COOKIE_MAX_AGE: joi.number().required(),
                ACCESS_COOKIE_SAME_SITE: joi.string().required(),
                ACCESS_COOKIE_HTTP_ONLY: joi.boolean().required(),
                ACCESS_COOKIE_MAX_AGE: joi.number().required(),
                REFRESH_TOKEN_EXPIRES_IN: joi.number().required(),
                REFRESH_TOKEN_ALGORITHM: joi.string().required(),
                ACCESS_TOKEN_EXPIRES_IN: joi.number().required(),
                ACCESS_TOKEN_ALGORITHM: joi.string().required(),
                APPLICATION_PORT: joi.number().required()
            })
        })
    ],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule {}
