import { PassportStrategy } from "@nestjs/passport"
import { Injectable } from "@nestjs/common"

import * as passportLocal from "passport-local"
import * as lodash from "lodash"

import { ExceptionService } from "@services/exception.service"
import { UserRepository } from "@repositories/user.repository"

@Injectable()
export class AuthSignupStrategy extends PassportStrategy(passportLocal.Strategy, "auth-signup") {
    constructor(
        private readonly exceptionService: ExceptionService,
        private readonly userRepository: UserRepository
    ) {
        super({
            passwordField: "password",
            usernameField: "login"
        })
    }

    async validate(login: LoginType) {
        const user = await this.userRepository.findUniqueByLogin(login)

        if (user) {
            throw this.exceptionService.conflictException("The login is already taken")
        } else {
            return lodash.omit(user, "password")
        }
    }
}
