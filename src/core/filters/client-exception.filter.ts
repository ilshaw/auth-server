import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common"

import * as express from "express"

import { ClientExceptionClass } from "@classes/client-exception.class"

@Catch(ClientExceptionClass)
export class ClientExceptionFilter implements ExceptionFilter {
    catch(exception: ClientExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse()
        const status = exception.getStatus()

        return host.switchToHttp().getResponse<express.Response>().status(status).json(response)
    }
}
