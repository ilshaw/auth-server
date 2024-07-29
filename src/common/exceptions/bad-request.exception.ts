import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class BadRequestException extends ClientExceptionClass {
    constructor(message: ExceptionMessageType) {
        super({ message: message }, ExceptionStatusEnum.BAD_REQUEST);
    }
}