import { Module } from "@nestjs/common"

import { ExtractorService } from "@services/extractor.service"

@Module({
    providers: [ExtractorService],
    exports: [ExtractorService]
})
export class ExtractorModule {}
