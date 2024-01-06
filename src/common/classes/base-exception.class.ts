import { ResponseInterface } from "@interfaces/response.interface"
import { StatusEnum } from "@enums/status.enum"

export class BaseExceptionClass {
    private readonly response: ResponseInterface
    private readonly status: StatusEnum

    constructor(response: ResponseInterface, status: StatusEnum) {
        this.response = response
        this.status = status
    }

    public getResponse() {
        return this.response
    }

    public getStatus() {
        return this.status
    }
}
