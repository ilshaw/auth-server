import { Injectable } from "@nestjs/common"

import { CreatedResponse } from "@responses/created.response"
import { OkResponse } from "@responses/ok.response"

@Injectable()
export class ResponseService {
    createdResponse(message: MessageType, data?: DataType) {
        return new CreatedResponse(message, data)
    }

    okResponse(message: MessageType, data?: DataType) {
        return new OkResponse(message, data)
    }
}
