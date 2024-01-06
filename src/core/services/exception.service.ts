import { Injectable } from "@nestjs/common"

import { InternalServerErrorException } from "@exceptions/internal-server-error.exception"
import { UnauthorizedException } from "@exceptions/unauthorized.exception"
import { BadRequestException } from "@exceptions/bad-request.exception"
import { ForbiddenException } from "@exceptions/forbidden.exception"
import { NotFoundException } from "@exceptions/not-found.exception"
import { ConflictException } from "@exceptions/conflict.exception"

@Injectable()
export class ExceptionService {
    internalServerErrorException(message: MessageType, cause?: CauseType) {
        return new InternalServerErrorException(message, cause)
    }

    unauthorizedException(message: MessageType) {
        return new UnauthorizedException(message)
    }

    badRequestException(message: MessageType) {
        return new BadRequestException(message)
    }

    forbiddenException(message: MessageType) {
        return new ForbiddenException(message)
    }

    notFoundException(message: MessageType) {
        return new NotFoundException(message)
    }

    conflictException(message: MessageType) {
        return new ConflictException(message)
    }
}
