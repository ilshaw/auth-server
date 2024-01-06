import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"

import * as rxjs from "rxjs"

import { InternalServerErrorException } from "@exceptions/internal-server-error.exception"
import { BaseExceptionClass } from "@classes/base-exception.class"

export class ExceptionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            rxjs.catchError((error) => {
                if (error instanceof BaseExceptionClass) {
                    return rxjs.throwError(() => error)
                } else {
                    return rxjs.throwError(() => new InternalServerErrorException("Internal server error", error))
                }
            })
        )
    }
}
