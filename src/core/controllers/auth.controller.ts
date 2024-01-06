import { Controller, Post, Body } from "@nestjs/common"

import { AuthSignupSchema } from "@schemas/auth-signup.schema"
import { AuthService } from "@services/auth.service"

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/signup")
    async authSignup(@Body() body: AuthSignupSchema) {
        return await this.authService.authSignup(body)
    }
}
