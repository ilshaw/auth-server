import { Injectable } from "@nestjs/common"

import { AuthSignupSchema } from "@schemas/auth-signup.schema"
import { UserRepository } from "@repositories/user.repository"
import { ResponseService } from "@services/response.service"
import { BcryptService } from "@services/bcrypt.service"
import { UserEntity } from "@entities/user.entity"
import { JwtService } from "@services/jwt.service"

@Injectable()
export class AuthService {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService,
        private readonly jwtService: JwtService
    ) {}

    async authSignup(body: AuthSignupSchema) {
        const hash = await this.bcryptService.hash(body.password)

        const user = await this.userRepository.createByPasswordAndLogin(hash, body.login)

        const refresh = this.jwtService.signRefreshToken(user)
        const access = this.jwtService.signAccessToken(user)

        return this.responseService.createdResponse("The user has been successfully signed up")
    }

    async authLogin(user: UserEntity) {
        const refresh = this.jwtService.signRefreshToken(user)
        const access = this.jwtService.signAccessToken(user)

        return this.responseService.createdResponse("The user has been successfully logged in")
    }
}
