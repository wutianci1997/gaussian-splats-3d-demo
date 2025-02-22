import { NumericArray } from '@math.gl/types';
import { MathArray } from "./math-array.js";
/** Base class for vectors with at least 2 elements */
export declare abstract class Vector extends MathArray {
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    /**
     * Returns the length of the vector from the origin to the point described by this vector
     *
     * @note `length` is a reserved word for Arrays, so `v.length()` will return number of elements
     * Instead we provide `len` and `magnitude`
     */
    len(): number;
    /**
     * Returns the length of the vector from the origin to the point described by this vector
     */
    magnitude(): number;
    /**
     * Returns the squared length of the vector from the origin to the point described by this vector
     */
    lengthSquared(): number;
    /**
     * Returns the squared length of the vector from the origin to the point described by this vector
     */
    magnitudeSquared(): number;
    distance(mathArray: Readonly<NumericArray>): number;
    distanceSquared(mathArray: Readonly<NumericArray>): number;
    dot(mathArray: Readonly<NumericArray>): number;
    normalize(): this;
    multiply(...vectors: Readonly<NumericArray>[]): this;
    divide(...vectors: Readonly<NumericArray>[]): this;
    lengthSq(): number;
    distanceTo(vector: Readonly<NumericArray>): number;
    distanceToSquared(vector: Readonly<NumericArray>): number;
    getComponent(i: number): number;
    setComponent(i: number, value: number): this;
    addVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this;
    subVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this;
    multiplyVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this;
    addScaledVector(a: Readonly<NumericArray>, b: number): this;
}
//# sourceMappingURL=vector.d.ts.map