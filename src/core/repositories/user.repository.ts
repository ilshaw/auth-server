import { Injectable } from "@nestjs/common"

import { PrismaService } from "@services/prisma.service"

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async createByPasswordAndLogin(password: PasswordType, login: LoginType) {
        return await this.prismaService.user.create({
            data: { password, login }
        })
    }

    async findUniqueByLogin(login: LoginType) {
        return await this.prismaService.user.findUnique({
            where: { login }
        })
    }
}
