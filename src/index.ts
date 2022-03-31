/**
 * Context is used to pass informal data to the exception,
 * We used a string any record to keep the flexibility.
 */
export type CustomErrorContext = Record<'status' | string, any>;

/**
 * You can refer to this typescript wiki:
 * https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
export abstract class AbstractCustomError extends Error {

    protected constructor(public message: string, public context?: CustomErrorContext) {
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AbstractCustomError.prototype);
    }
}

export class CustomError implements AbstractCustomError {
    public name: string;

    constructor(public message: string, public context?: CustomErrorContext) {
        this.name = 'Error';
    }
}

// nvmrc, renovate, readme, github workflow, np (node version)

/**
 * Standard Errors definitions
 * Error names and code comes from standard RFC HTTP status codes
 * https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 */
export const BadRequest = (context?: CustomErrorContext) => new CustomError('Bad Request', context);
export const Unauthorized = (context?: CustomErrorContext) => new CustomError('Unauthorized', context);
export const Forbidden = (context?: CustomErrorContext) => new CustomError('Forbidden', context);
export const NotFound = (context?: CustomErrorContext) => new CustomError('Not Found', context);
export const RequestTimeOut = (context?: CustomErrorContext) => new CustomError('Request Time-out', context);
export const InternalServerError = (context?: CustomErrorContext) => new CustomError('Internal Server Error', context);
export const NotImplemented = (context?: CustomErrorContext) => new CustomError('Not Implemented', context);