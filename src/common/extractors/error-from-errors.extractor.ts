import { ValidationError } from "class-validator"

export function ErrorsFromErrorsExtractor(errors: ValidationError[]) {
    const messages = errors.map((error: ValidationError) => {
        if (error.constraints) {
            return Object.values(error.constraints)
        } else {
            return ErrorsFromErrorsExtractor(error.children)
        }
    })

    return messages.flat()
}

export const ErrorFromErrorsExtractor = (errors: ValidationError[]) => {
    const messages = ErrorsFromErrorsExtractor(errors)

    return messages.shift()
}
