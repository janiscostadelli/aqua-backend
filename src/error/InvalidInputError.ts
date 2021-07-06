import { BaseError } from "./BaseError";

export class InvalidInputError extends BaseError {
    constructor(message: string) {
        super(message, 417)
    }
}