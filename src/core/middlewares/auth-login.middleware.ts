import { Injectable, NestMiddleware } from "@nestjs/common"

import * as classTransformer from "class-transformer"
import * as classValidator from "class-validator"
import * as express from "express"

import { ExceptionService } from "@services/exception.service"
import { ExtractorService } from "@services/extractor.service"
import { AuthLoginSchema } from "@schemas/auth-login.schema"

@Injectable()
export class AuthLoginMiddleware implements NestMiddleware {
    constructor(
        private readonly exceptionService: ExceptionService,
        private readonly extractorService: ExtractorService
    ) {}

    use(request: express.Request, response: express.Response, next: express.NextFunction) {
        const errors = classValidator.validateSync(classTransformer.plainToInstance(AuthLoginSchema, request.body))

        const error = this.extractorService.errorFromErrorsExtractor(errors)

        if (error) {
            return next(this.exceptionService.badRequestException(error))
        } else {
            return next()
        }
    }
}
