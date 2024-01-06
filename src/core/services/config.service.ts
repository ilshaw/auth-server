import { ConfigService as NestConfigService } from "@nestjs/config"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ConfigService {
    constructor(private nestConfigService: NestConfigService) {}

    getRefreshCookieSameSite() {
        return this.nestConfigService.get("REFRESH_COOKIE_SAME_SITE")
    }

    getRefreshCookieHttpOnly() {
        return this.nestConfigService.get("REFRESH_COOKIE_HTTP_ONLY")
    }

    getRefreshTokenExpiresIn() {
        return this.nestConfigService.get("REFRESH_TOKEN_EXPIRES_IN")
    }

    getRefreshTokenAlgorithm() {
        return this.nestConfigService.get("REFRESH_TOKEN_ALGORITHM")
    }

    getAccessCookieSameSite() {
        return this.nestConfigService.get("ACCESS_COOKIE_SAME_SITE")
    }

    getAccessTokenExpiresIn() {
        return this.nestConfigService.get("ACCESS_TOKEN_EXPIRES_IN")
    }

    getAccessCookieHttpOnly() {
        return this.nestConfigService.get("ACCESS_COOKIE_HTTP_ONLY")
    }

    getAccessTokenAlgorithm() {
        return this.nestConfigService.get("ACCESS_TOKEN_ALGORITHM")
    }

    getRefreshCookieMaxAge() {
        return this.nestConfigService.get("REFRESH_COOKIE_MAX_AGE")
    }

    getAccessCookieMaxAge() {
        return this.nestConfigService.get("ACCESS_COOKIE_MAX_AGE")
    }

    getApplicationPort() {
        return this.nestConfigService.get("APPLICATION_PORT")
    }
}
