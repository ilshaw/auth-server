import { JwtService as NestJwtService } from "@nestjs/jwt"
import { Injectable } from "@nestjs/common"

import { ConfigService } from "@services/config.service"
import { UserEntity } from "@entities/user.entity"

@Injectable()
export class JwtService {
    constructor(
        private readonly nestJwtService: NestJwtService,
        private readonly configService: ConfigService
    ) {}

    signRefreshToken(user: Omit<UserEntity, "password">) {
        const payload = {
            id: user.id
        }

        const options = {
            algorithm: this.configService.getRefreshTokenAlgorithm(),
            expiresIn: this.configService.getRefreshTokenExpiresIn()
        }

        return this.nestJwtService.sign(payload, options)
    }

    signAccessToken(user: Omit<UserEntity, "password">) {
        const payload = {
            id: user.id
        }

        const options = {
            algorithm: this.configService.getAccessTokenAlgorithm(),
            expiresIn: this.configService.getAccessTokenExpiresIn()
        }

        return this.nestJwtService.sign(payload, options)
    }
}
