import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"

import * as rxjs from "rxjs"

import { ClientResponseClass } from "@classes/client-response.class"

export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            rxjs.map((data) => {
                if (data instanceof ClientResponseClass) {
                    return data.getResponse()
                } else {
                    return data
                }
            })
        )
    }
}
