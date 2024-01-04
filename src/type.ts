import mongoose from 'mongoose';
import type { Context as BaseContext } from 'elysia/dist';

/**
 * Extends the base Elysia Context with custom properties.
 */
export interface Context extends BaseContext {
    mongoose: typeof mongoose.connection | undefined;
}

/**
 * Represents a response data transfer object.
 */
export class ResponseDTO<T> {
    result?: T;
    error?: any;
    message?: string;
    statusCode?: number;
    constructor(data?: Partial<ResponseDTO<T>>) {
        Object.assign(this, data);
        // parse data.error if exists to get their attributes and store them in this.error
        if (data?.error) this.error = {};
        if (data?.error?.message) this.error.message = data.error.message || data.error.code || data.error.error || data.error.name;
        if (process.env.NODE_ENV !== 'production') {
            if (data?.error?.stack) this.error.stack = data.error.stack;
            if (data?.error?.trace) this.error.trace = data.error.trace;
        }
    }
}