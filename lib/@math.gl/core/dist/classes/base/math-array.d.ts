import { NumericArray } from '@math.gl/types';
import { ConfigurationOptions } from "../../lib/common.js";
/** Base class for vectors and matrices */
export declare abstract class MathArray extends Array<number> {
    /** Number of elements (values) in this array */
    abstract get ELEMENTS(): number;
    abstract copy(vector: Readonly<NumericArray>): this;
    abstract fromObject(object: Record<string, unknown>): this;
    /**
     * Clone the current object
     * @returns a new copy of this object
     */
    clone(): this;
    fromArray(array: Readonly<NumericArray>, offset?: number): this;
    toArray<TypedArray>(targetArray: TypedArray, offset?: number): TypedArray;
    toArray(targetArray?: number[], offset?: number): NumericArray;
    toObject(targetObject: Record<string, unknown>): Record<string, unknown>;
    from(arrayOrObject: Readonly<NumericArray> | Record<string, unknown>): this;
    to<T extends NumericArray | Record<string, unknown>>(arrayOrObject: T): T;
    toTarget(target: this): this;
    /** @deprecated */
    toFloat32Array(): Float32Array;
    toString(): string;
    /** Formats string according to options */
    formatString(opts: ConfigurationOptions): string;
    equals(array: Readonly<NumericArray>): boolean;
    exactEquals(array: Readonly<NumericArray>): boolean;
    /** Negates all values in this object */
    negate(): this;
    /** Linearly interpolates between two values */
    lerp(a: Readonly<NumericArray>, t: number): this;
    lerp(a: Readonly<NumericArray>, b: Readonly<NumericArray>, t: number): this;
    /** Minimal */
    min(vector: Readonly<NumericArray>): this;
    /** Maximal */
    max(vector: Readonly<NumericArray>): this;
    clamp(minVector: Readonly<NumericArray>, maxVector: Readonly<NumericArray>): this;
    add(...vectors: Readonly<NumericArray>[]): this;
    subtract(...vectors: Readonly<NumericArray>[]): this;
    scale(scale: number | Readonly<NumericArray>): this;
    /**
     * Multiplies all elements by `scale`
     * Note: `Matrix4.multiplyByScalar` only scales its 3x3 "minor"
     */
    multiplyByScalar(scalar: number): this;
    /** Throws an error if array length is incorrect or contains illegal values */
    check(): this;
    /** Returns false if the array length is incorrect or contains illegal values */
    validate(): boolean;
    /** @deprecated */
    sub(a: Readonly<NumericArray>): this;
    /** @deprecated */
    setScalar(a: number): this;
    /** @deprecated */
    addScalar(a: number): this;
    /** @deprecated */
    subScalar(a: number): this;
    /** @deprecated */
    multiplyScalar(scalar: number): this;
    /** @deprecated */
    divideScalar(a: number): this;
    /** @deprecated */
    clampScalar(min: number, max: number): this;
    /** @deprecated */
    get elements(): NumericArray;
}
//# sourceMappingURL=math-array.d.ts.map