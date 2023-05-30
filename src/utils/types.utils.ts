export type AsyncFunction<A extends [] = [], O extends any = void> = (...args: A) => Promise<O>;

export function isAsyncFunction<A extends [] = [], O extends any = void>(func: any): func is AsyncFunction<A, O> {
  return (
    (typeof func === "function" && typeof func === "object" && typeof func.then === "function") ||
    func.constructor.name === "AsyncFunction"
  );
}
