import { JwtModule as NestJwtModule } from "@nestjs/jwt"
import { Module } from "@nestjs/common"

import * as fs from "fs"

import { JwtService } from "@services/jwt.service"

@Module({
    imports: [
        NestJwtModule.register({
            privateKey: fs.readFileSync(process.cwd() + "/keys/private.key")
        })
    ],
    providers: [JwtService],
    exports: [JwtService]
})
export class JwtModule {}
