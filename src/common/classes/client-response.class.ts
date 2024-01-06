import { ResponseInterface } from "@interfaces/response.interface"
import { BaseResponseClass } from "@classes/base-response.class"
import { StatusEnum } from "@enums/status.enum"

export class ClientResponseClass extends BaseResponseClass {
    constructor(response: ResponseInterface, status: StatusEnum) {
        super(response, status)
    }
}
