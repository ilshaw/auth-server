import { Controller, UseGuards, Post, Body } from "@nestjs/common"
import { ThrottlerGuard } from "@nestjs/throttler"

import { AuthSignupSchema } from "@schemas/auth-signup.schema"
import { AuthSignupGuard } from "@guards/auth-signup.guard"
import { UserDecorator } from "@decorators/user.decorator"
import { AuthLoginGuard } from "@guards/auth-login.guard"
import { AuthService } from "@services/auth.service"
import { UserEntity } from "@entities/user.entity"

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(ThrottlerGuard, AuthSignupGuard)
    @Post("/signup")
    async authSignup(@Body() body: AuthSignupSchema) {
        return await this.authService.authSignup(body)
    }

    @UseGuards(ThrottlerGuard, AuthLoginGuard)
    @Post("/login")
    async authLogin(@UserDecorator() user: UserEntity) {
        return await this.authService.authLogin(user)
    }
}
