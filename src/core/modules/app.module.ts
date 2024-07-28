import { Module } from "@nestjs/common";

import { PrismaModule } from "@core/modules/prisma.module";

@Module({
    imports: [
        PrismaModule
    ]
})
export class AppModule {}