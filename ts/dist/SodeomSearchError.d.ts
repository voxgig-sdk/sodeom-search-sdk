import { Context } from './Context';
declare class SodeomSearchError extends Error {
    isSodeomSearchError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SodeomSearchError };
