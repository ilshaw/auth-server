import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common"
import { ThrottlerException } from "@nestjs/throttler"

import * as express from "express"

@Catch(ThrottlerException)
export class ThrottlerExceptionFilter implements ExceptionFilter {
    catch(exception: ThrottlerException, host: ArgumentsHost) {
        return host.switchToHttp().getResponse<express.Response>().status(HttpStatus.TOO_MANY_REQUESTS).json({
            message: "Too many requests",
            status: HttpStatus.TOO_MANY_REQUESTS
        })
    }
}
