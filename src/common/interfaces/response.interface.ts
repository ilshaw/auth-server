import { StatusEnum } from "@enums/status.enum"

export interface ResponseInterface {
    message: MessageType
    status: StatusEnum
    data?: DataType
}