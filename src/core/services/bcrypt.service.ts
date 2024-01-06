import { Injectable } from "@nestjs/common"

import * as bcrypt from "bcrypt"

@Injectable()
export class BcryptService {
    async compare(data: string, encrypted: string) {
        return await bcrypt.compare(data, encrypted)
    }

    async hash(data: string) {
        const salt = await bcrypt.genSalt()

        return await bcrypt.hash(data, salt)
    }
}
