import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class UnauthorizedException extends ClientExceptionClass {
    constructor(message: ExceptionMessageType) {
        super({ message: message }, ExceptionStatusEnum.UNAUTHORIZED);
    }
}