import { Module } from "@nestjs/common"

import { ConfigModule } from "@modules/config.module"
import { PrismaModule } from "@modules/prisma.module"
import { AuthModule } from "@modules/auth.module"

@Module({
    imports: [ConfigModule, PrismaModule, AuthModule]
})
export class AppModule {}
