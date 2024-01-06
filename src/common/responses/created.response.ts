import { ClientResponseClass } from "@classes/client-response.class"
import { StatusEnum } from "@enums/status.enum"

export class CreatedResponse extends ClientResponseClass {
    constructor(message: MessageType, data?: DataType) {
        super({ message, status: StatusEnum.CREATED, data }, StatusEnum.CREATED)
    }
}
