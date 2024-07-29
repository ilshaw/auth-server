import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ]
})
export class CqrsModule {}