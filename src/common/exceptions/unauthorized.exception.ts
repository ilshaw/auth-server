import { ClientExceptionClass } from "@classes/client-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class UnauthorizedException extends ClientExceptionClass {
    constructor(message: MessageType) {
        super({ message, status: StatusEnum.UNAUTHORIZED }, StatusEnum.UNAUTHORIZED)
    }
}
