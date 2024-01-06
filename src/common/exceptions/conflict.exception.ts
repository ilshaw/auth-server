import { ClientExceptionClass } from "@classes/client-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class ConflictException extends ClientExceptionClass {
    constructor(message: MessageType) {
        super({ message, status: StatusEnum.CONFLICT }, StatusEnum.CONFLICT)
    }
}
