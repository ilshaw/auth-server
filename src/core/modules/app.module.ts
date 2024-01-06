import { Module } from "@nestjs/common"

import { ThrottlerModule } from "@modules/throttler.module"
import { ConfigModule } from "@modules/config.module"
import { PrismaModule } from "@modules/prisma.module"
import { AuthModule } from "@modules/auth.module"

@Module({
    imports: [ThrottlerModule, ConfigModule, PrismaModule, AuthModule]
})
export class AppModule {}
