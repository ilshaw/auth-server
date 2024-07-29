import { Module } from "@nestjs/common";

import { ConfigModule } from "@core/modules/config.module";
import { PrismaModule } from "@core/modules/prisma.module";

@Module({
    imports: [
        ConfigModule,
        PrismaModule
    ]
})
export class AppModule {}