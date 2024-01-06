import { ClientExceptionClass } from "@classes/client-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class ForbiddenException extends ClientExceptionClass {
    constructor(message: MessageType) {
        super({ message, status: StatusEnum.FORBIDDEN }, StatusEnum.FORBIDDEN)
    }
}
