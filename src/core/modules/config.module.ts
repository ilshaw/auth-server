import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";

import * as joi from "joi";

@Global()
@Module({
    imports: [
    	NestConfigModule.forRoot({
            validationSchema: joi.object({
                APP_PORT: joi.number().required()
            })
        })
    ]
})
export class ConfigModule {}