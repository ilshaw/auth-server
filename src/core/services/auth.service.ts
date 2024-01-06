import { Injectable } from "@nestjs/common"

import { ResponseService } from "@services/response.service"

@Injectable()
export class AuthService {
    constructor(private readonly responseService: ResponseService) {}

    async authSignup() {
        return this.responseService.createdResponse("The user has been successfully signed up")
    }
}
