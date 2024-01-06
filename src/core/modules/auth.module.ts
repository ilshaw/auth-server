import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common"

import { AuthSignupMiddleware } from "@middlewares/auth-signup.middleware"
import { AuthLoginMiddleware } from "@middlewares/auth-login.middleware"
import { AuthSignupStrategy } from "@strategies/auth-signup.strategy"
import { AuthLoginStrategy } from "@strategies/auth-login.strategy"
import { UserRepository } from "@repositories/user.repository"
import { AuthController } from "@controllers/auth.controller"
import { ExceptionModule } from "@modules/exception.module"
import { ExtractorModule } from "@modules/extractor.module"
import { ResponseModule } from "@modules/response.module"
import { BcryptModule } from "@modules/bcrypt.module"
import { AuthService } from "@services/auth.service"

@Module({
    imports: [ExceptionModule, ExtractorModule, ResponseModule, BcryptModule],
    controllers: [AuthController],
    providers: [AuthSignupStrategy, AuthLoginStrategy, UserRepository, AuthService]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthSignupMiddleware).forRoutes({ path: "/auth/signup", method: RequestMethod.POST })
        consumer.apply(AuthLoginMiddleware).forRoutes({ path: "/auth/login", method: RequestMethod.POST })
    }
}
