import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common"

import * as express from "express"

@Catch()
export class EveryExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        console.log("Unhandled server exception ->", exception)

        return host.switchToHttp().getResponse<express.Response>().status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
            status: HttpStatus.INTERNAL_SERVER_ERROR
        })
    }
}
