import type { NumericArray } from '@math.gl/types';
import type { MathArray } from "../classes/base/math-array.js";
export type ConfigurationOptions = {
    EPSILON: number;
    debug?: boolean;
    precision: number;
    printTypes?: boolean;
    printDegrees?: boolean;
    printRowMajor?: boolean;
    _cartographicRadians?: boolean;
};
declare global {
    var mathgl: {
        config: Required<ConfigurationOptions>;
    };
}
export declare const config: Required<ConfigurationOptions>;
export declare function configure(options: Partial<ConfigurationOptions>): ConfigurationOptions;
/**
 * Formats a value into a string
 * @param value
 * @param param1
 * @returns
 */
export declare function formatValue(value: number, { precision }?: {
    precision?: number;
}): string;
/**
 * Check if value is an "array"
 * Returns `true` if value is either an array or a typed array
 * Note: returns `false` for `ArrayBuffer` and `DataView` instances
 * @note isTypedArray and isNumericArray are often more useful in TypeScript
 */
export declare function isArray(value: unknown): boolean;
export declare function clone(array: NumericArray | MathArray): NumericArray;
export declare function toRadians(degrees: number): number;
export declare function toRadians(degrees: NumericArray): NumericArray;
export declare function toDegrees(degrees: number): number;
export declare function toDegrees(degrees: NumericArray): NumericArray;
/**
 * "GLSL equivalent" radians: Works on single values and vectors
 */
export declare function radians(degrees: number): number;
export declare function radians(degrees: NumericArray, result?: NumericArray): NumericArray;
/**
 * "GLSL equivalent" degrees: Works on single values and vectors
 */
export declare function degrees(radians: number): number;
export declare function degrees(radians: NumericArray, result?: NumericArray): NumericArray;
/**
 * "GLSL equivalent" of `Math.sin`: Works on single values and vectors
 * @deprecated
 */
export declare function sin(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * "GLSL equivalent" of `Math.cos`: Works on single values and vectors
 * @deprecated
 */
export declare function cos(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * "GLSL equivalent" of `Math.tan`: Works on single values and vectors
 * @deprecated
 */
export declare function tan(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * "GLSL equivalent" of `Math.asin`: Works on single values and vectors
 * @deprecated
 */
export declare function asin(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * "GLSL equivalent" of `Math.acos`: Works on single values and vectors
 * @deprecated
 */
export declare function acos(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * "GLSL equivalent" of `Math.atan`: Works on single values and vectors
 * @deprecated
 */
export declare function atan(radians: number | NumericArray, result?: NumericArray): number | NumericArray;
/**
 * GLSL style value clamping: Works on single values and vectors
 */
export declare function clamp(value: number, min: number, max: number): number;
export declare function clamp(value: NumericArray, min: number, max: number): NumericArray;
/**
 * Interpolate between two numbers or two arrays
 */
export declare function lerp(a: number, b: number, t: number): number;
export declare function lerp(a: NumericArray, b: NumericArray, t: number): NumericArray;
/**
 * Compares any two math objects, using `equals` method if available.
 * @param a
 * @param b
 * @param epsilon
 * @returns
 */
export declare function equals(a: any, b: any, epsilon?: number): boolean;
export declare function exactEquals(a: any, b: any): boolean;
export declare function withEpsilon<T>(epsilon: number, func: () => T): T;
//# sourceMappingURL=common.d.ts.map