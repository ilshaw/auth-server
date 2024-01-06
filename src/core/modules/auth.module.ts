import { Module } from "@nestjs/common"

import { UserRepository } from "@repositories/user.repository"
import { AuthController } from "@controllers/auth.controller"
import { ExceptionModule } from "@modules/exception.module"
import { ResponseModule } from "@modules/response.module"
import { AuthService } from "@services/auth.service"

@Module({
    imports: [ExceptionModule, ResponseModule],
    controllers: [AuthController],
    providers: [UserRepository, AuthService]
})
export class AuthModule {}
