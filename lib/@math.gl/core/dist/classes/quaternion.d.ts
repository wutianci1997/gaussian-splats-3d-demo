import { NumericArray } from '@math.gl/types';
import { MathArray } from "./base/math-array.js";
export declare class Quaternion extends MathArray {
    constructor(x?: number | Readonly<NumericArray>, y?: number, z?: number, w?: number);
    copy(array: Readonly<NumericArray>): this;
    set(x: number, y: number, z: number, w: number): this;
    fromObject(object: {
        x: number;
        y: number;
        z: number;
        w: number;
    }): this;
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     * NOTE: The resultant quaternion is not normalized, so you should
     * be sure to renormalize the quaternion yourself where necessary.
     * @param m
     * @returns
     */
    fromMatrix3(m: Readonly<NumericArray>): this;
    fromAxisRotation(axis: Readonly<NumericArray>, rad: number): this;
    /** Set a quat to the identity quaternion */
    identity(): this;
    setAxisAngle(axis: Readonly<NumericArray>, rad: number): this;
    get ELEMENTS(): number;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    len(): number;
    lengthSquared(): number;
    dot(a: Readonly<NumericArray>): number;
    rotationTo(vectorA: NumericArray, vectorB: NumericArray): this;
    add(a: Readonly<NumericArray>): this;
    calculateW(): this;
    conjugate(): this;
    invert(): this;
    lerp(a: Readonly<NumericArray>, b: Readonly<NumericArray> | number, t?: number): this;
    multiplyRight(a: Readonly<NumericArray>): this;
    multiplyLeft(a: Readonly<NumericArray>): this;
    normalize(): this;
    rotateX(rad: number): this;
    rotateY(rad: number): this;
    rotateZ(rad: number): this;
    scale(b: number): this;
    slerp(target: Readonly<NumericArray>, ratio: number): this;
    slerp(start: Readonly<NumericArray>, target: Readonly<NumericArray>, ratio: number): this;
    slerp(params: {
        start: Readonly<NumericArray>;
        target: Readonly<NumericArray>;
        ratio: number;
    }): this;
    transformVector4(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    lengthSq(): number;
    setFromAxisAngle(axis: Readonly<NumericArray>, rad: number): this;
    premultiply(a: Readonly<NumericArray>): this;
    multiply(a: Readonly<NumericArray>): this;
}
//# sourceMappingURL=quaternion.d.ts.map