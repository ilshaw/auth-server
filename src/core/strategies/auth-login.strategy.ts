import { PassportStrategy } from "@nestjs/passport"
import { Injectable } from "@nestjs/common"

import * as passportLocal from "passport-local"
import * as lodash from "lodash"

import { ExceptionService } from "@services/exception.service"
import { UserRepository } from "@repositories/user.repository"
import { BcryptService } from "@services/bcrypt.service"

@Injectable()
export class AuthLoginStrategy extends PassportStrategy(passportLocal.Strategy, "auth-login") {
    constructor(
        private readonly exceptionService: ExceptionService,
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService
    ) {
        super({
            passwordField: "password",
            usernameField: "login"
        })
    }

    async validate(login: LoginType, password: PasswordType) {
        const user = await this.userRepository.findUniqueByLogin(login)

        if (user) {
            const compare = await this.bcryptService.compare(password, user.password)

            if (compare) {
                return lodash.omit(user, "password")
            } else {
                throw this.exceptionService.forbiddenException("Bad password")
            }
        } else {
            throw this.exceptionService.notFoundException("The user was not found")
        }
    }
}
