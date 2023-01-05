// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appFetch =   <T>(...args: any): Promise<TypedResponse<T>> => {
    return fetch.apply(window, args);
};