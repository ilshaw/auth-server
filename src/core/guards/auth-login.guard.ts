import { AuthGuard } from "@nestjs/passport"
import { Injectable } from "@nestjs/common"

import * as lodash from "lodash"

import { ExceptionService } from "@services/exception.service"

@Injectable()
export class AuthLoginGuard extends AuthGuard("auth-login") {
    constructor(private readonly exceptionService: ExceptionService) {
        super()
    }

    handleRequest<UserEntity extends Object>(error: unknown, user: UserEntity) {
        if (error) {
            throw error
        } else {
            if (user) {
                return lodash.omit(user, "password")
            } else {
                throw this.exceptionService.notFoundException("The user was not found")
            }
        }
    }
}
