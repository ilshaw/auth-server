import { ClientResponseClass } from "@common/classes/client-response.class";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

export class OkResponse extends ClientResponseClass {
    constructor(message: ResponseMessageType, data?: ResponseDataType) {
        super({ message: message, data: data }, ResponseStatusEnum.OK);
    }
}