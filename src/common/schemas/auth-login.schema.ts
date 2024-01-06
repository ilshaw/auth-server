import { IsNotEmpty, IsString } from "class-validator"

import { UserEntity } from "@entities/user.entity"

export class AuthLoginSchema implements Pick<UserEntity, "password" | "login"> {
    @IsString({ message: "The password field must be a string" })
    @IsNotEmpty({ message: "The password field is required" })
    password: PasswordType

    @IsString({ message: "The login field must be a string" })
    @IsNotEmpty({ message: "The login field is required" })
    login: LoginType
}
