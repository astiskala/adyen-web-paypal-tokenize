/**
 * returns the indicated property of an object, if it exists.
 *
 * @param object - The object to query
 * @param path - The property name or path to the property
 * @returns The value at `obj[p]`.

 * @example
 * ```
 *   getProp({x: 100}, 'x'); //=> 100
 *   getProp({}, 'x'); //=> undefined
 * ```
 */
declare const getProp: (object: any, path: string) => any;
export default getProp;
