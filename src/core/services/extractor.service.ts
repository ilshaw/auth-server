import { Injectable } from "@nestjs/common"

import { ValidationError } from "class-validator"

import { ErrorFromErrorsExtractor } from "@extractors/error-from-errors.extractor"

@Injectable()
export class ExtractorService {
    errorFromErrorsExtractor(errors: ValidationError[]) {
        return ErrorFromErrorsExtractor(errors)
    }
}
