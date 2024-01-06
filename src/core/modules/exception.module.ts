import { Module } from "@nestjs/common"

import { ExceptionService } from "@services/exception.service"

@Module({
    providers: [ExceptionService],
    exports: [ExceptionService]
})
export class ExceptionModule {}
