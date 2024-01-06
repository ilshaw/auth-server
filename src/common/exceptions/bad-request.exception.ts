import { ClientExceptionClass } from "@classes/client-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class BadRequestException extends ClientExceptionClass {
    constructor(message: MessageType) {
        super({ message, status: StatusEnum.BAD_REQUEST }, StatusEnum.BAD_REQUEST)
    }
}
