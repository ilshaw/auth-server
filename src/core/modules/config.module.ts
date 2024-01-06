import { ConfigModule as NestConfigModule } from "@nestjs/config"
import { Global, Module } from "@nestjs/common"

import { ConfigService } from "@services/config.service"

@Global()
@Module({
    imports: [NestConfigModule.forRoot()],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule {}
