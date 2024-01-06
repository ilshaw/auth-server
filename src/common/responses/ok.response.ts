import { ClientResponseClass } from "@classes/client-response.class"
import { StatusEnum } from "@enums/status.enum"

export class OkResponse extends ClientResponseClass {
    constructor(message: MessageType, data?: DataType) {
        super({ message, status: StatusEnum.OK, data }, StatusEnum.OK)
    }
}
