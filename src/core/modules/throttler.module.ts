import { ThrottlerModule as NestThrottlerModule } from "@nestjs/throttler"
import { Global, Module } from "@nestjs/common"

@Global()
@Module({
    imports: [
        NestThrottlerModule.forRoot({
            throttlers: [
                {
                    limit: 5,
                    name: "short",
                    ttl: 1000
                },
                {
                    limit: 25,
                    name: "middle",
                    ttl: 10000
                },
                {
                    limit: 125,
                    name: "long",
                    ttl: 100000
                }
            ]
        })
    ]
})
export class ThrottlerModule {}
