import { BaseExceptionClass } from "@classes/base-exception.class"
import { ResponseInterface } from "@interfaces/response.interface"
import { StatusEnum } from "@enums/status.enum"

export class ServerExceptionClass extends BaseExceptionClass {
    private readonly cause: CauseType

    constructor(response: ResponseInterface, status: StatusEnum, cause: CauseType) {
        super(response, status)

        this.cause = cause
    }

    public getCause() {
        return this.cause
    }
}
