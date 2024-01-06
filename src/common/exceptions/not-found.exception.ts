import { ClientExceptionClass } from "@classes/client-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class NotFoundException extends ClientExceptionClass {
    constructor(message: MessageType) {
        super({ message, status: StatusEnum.NOT_FOUND }, StatusEnum.NOT_FOUND)
    }
}
