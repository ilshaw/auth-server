import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common"

import * as express from "express"

import { ServerExceptionClass } from "@classes/server-exception.class"

@Catch(ServerExceptionClass)
export class ServerExceptionFilter implements ExceptionFilter {
    catch(exception: ServerExceptionClass, host: ArgumentsHost) {
        console.log("Server exception ->", exception.getCause())

        const response = exception.getResponse()
        const status = exception.getStatus()

        return host.switchToHttp().getResponse<express.Response>().status(status).json(response)
    }
}
