import { Controller, Post } from "@nestjs/common"

import { AuthService } from "@services/auth.service"

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/signup")
    async authSignup() {
        return await this.authService.authSignup()
    }
}
