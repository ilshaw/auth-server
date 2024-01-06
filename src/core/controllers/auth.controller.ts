import { Controller, UseGuards, Post, Body } from "@nestjs/common"

import { AuthSignupSchema } from "@schemas/auth-signup.schema"
import { AuthSignupGuard } from "@guards/auth-signup.guard"
import { AuthService } from "@services/auth.service"

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthSignupGuard)
    @Post("/signup")
    async authSignup(@Body() body: AuthSignupSchema) {
        return await this.authService.authSignup(body)
    }
}
