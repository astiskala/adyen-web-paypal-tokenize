/**
 * Generate random number using window.crypto if available - otherwise fall back toMath.random
 *
 * @returns Number
 */
declare function generateRandomNumber(): number;
declare function objectsDeepEqual(obj1?: {}, obj2?: {}): boolean;
/**
 * Returns true if x is:
 * null, undefined, false, 0, NaN, empty object or array, empty string
 * @param x -
 * @example
 * ```
 * falsy(0) // => true
 * falsy('') // => true
 * falsy({}) // => true
 * falsy([]) // => true
 * falsy(false) // => true
 * falsy(NaN) // => true
 * falsy(null) // => true
 * falsy(undefined) // => true
 *
 * falsy(1) // => false
 * falsy('d') // => false
 * falsy({type:"kin"}) // => false
 * falsy([6]) // => false
 * falsy(true) // => false
 * ```
 */
declare function falsy(x: any): boolean;
/**
 * Inverse of falsy - returns true if x is NOT null, undefined, false, 0, NaN, empty object or array, empty string
 * @param x -
 */
declare function notFalsy(x: any): boolean;
export { generateRandomNumber, existy, falsy, isArray, objectsDeepEqual, notFalsy, truthy };
