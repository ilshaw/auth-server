import { BaseExceptionClass } from "@classes/base-exception.class"
import { ResponseInterface } from "@interfaces/response.interface"
import { StatusEnum } from "@enums/status.enum"

export class ClientExceptionClass extends BaseExceptionClass {
    constructor(response: ResponseInterface, status: StatusEnum) {
        super(response, status)
    }
}
