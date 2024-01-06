import { Injectable } from "@nestjs/common"

import { AuthSignupSchema } from "@schemas/auth-signup.schema"
import { UserRepository } from "@repositories/user.repository"
import { ResponseService } from "@services/response.service"
import { BcryptService } from "@services/bcrypt.service"
import { UserEntity } from "@entities/user.entity"

@Injectable()
export class AuthService {
    constructor(
        private readonly responseService: ResponseService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService
    ) {}

    async authSignup(body: AuthSignupSchema) {
        const hash = await this.bcryptService.hash(body.password)

        await this.userRepository.createByPasswordAndLogin(hash, body.login)

        return this.responseService.createdResponse("The user has been successfully signed up")
    }

    async authLogin(user: UserEntity) {
        return this.responseService.createdResponse("The user has been successfully logged in")
    }
}
