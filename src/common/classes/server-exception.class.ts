import { BaseExceptionClass } from "@classes/base-exception.class"
import { ResponseInterface } from "@interfaces/response.interface"
import { StatusEnum } from "@enums/status.enum"

export class ServerExceptionClass extends BaseExceptionClass {
    constructor(response: ResponseInterface, status: StatusEnum, private readonly cause: CauseType) {
        super(response, status)
    }

    public getCause() {
        return this.cause
    }
}
