import { ServerExceptionClass } from "@common/classes/server-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class InternalServerErrorException extends ServerExceptionClass {
    constructor(message: ExceptionMessageType, cause?: ExceptionCauseType) {
        super({ message: message, cause: cause }, ExceptionStatusEnum.INTERNAL_SERVER_ERROR);
    }
}