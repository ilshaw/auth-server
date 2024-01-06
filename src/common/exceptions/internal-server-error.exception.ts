import { ServerExceptionClass } from "@classes/server-exception.class"
import { StatusEnum } from "@enums/status.enum"

export class InternalServerErrorException extends ServerExceptionClass {
    constructor(message: MessageType, cause?: CauseType) {
        super({ message, status: StatusEnum.INTERNAL_SERVER_ERROR }, StatusEnum.INTERNAL_SERVER_ERROR, cause)
    }
}
