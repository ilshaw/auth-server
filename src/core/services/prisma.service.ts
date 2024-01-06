import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common"

import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleDestroy() {
        return await this.$disconnect()
    }

    async onModuleInit() {
        return await this.$connect()
    }
}
