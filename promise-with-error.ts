export type PromiseTypeWithError<TResult, TError> = Promise<TResult>;

export class PromiseWithError<TResult, TError> {

    private innerPromise: Promise<TResult>;

    constructor(callback: (resolve:(res: TResult) => void, reject: (err: TError) => void)  => void) {
        this.innerPromise = new Promise<TResult>(callback);
    } 

    then(callback: (res: TResult) => void, errorCallback: (err: TError) => void): PromiseWithError<TResult, TError> {
        this.innerPromise.then(callback, errorCallback);
        return this;
    }

    catch(errorCallback: (err: TError) => void): PromiseWithError<TResult, TError> {
        this.innerPromise.catch(errorCallback);
        return this;
    } 
}