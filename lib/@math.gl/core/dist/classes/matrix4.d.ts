import { NumericArray, NumericArray16 } from '@math.gl/types';
import { Matrix } from "./base/matrix.js";
declare enum INDICES {
    COL0ROW0 = 0,
    COL0ROW1 = 1,
    COL0ROW2 = 2,
    COL0ROW3 = 3,
    COL1ROW0 = 4,
    COL1ROW1 = 5,
    COL1ROW2 = 6,
    COL1ROW3 = 7,
    COL2ROW0 = 8,
    COL2ROW1 = 9,
    COL2ROW2 = 10,
    COL2ROW3 = 11,
    COL3ROW0 = 12,
    COL3ROW1 = 13,
    COL3ROW2 = 14,
    COL3ROW3 = 15
}
/** Helper type that captures array length for a 4x4 matrix */
export type Matrix4Like = Matrix4 | NumericArray16;
/**
 * A 4x4 matrix with common linear algebra operations
 * Subclass of Array<number> meaning that it is highly compatible with other libraries
 */
export declare class Matrix4 extends Matrix {
    static get IDENTITY(): Readonly<Matrix4>;
    static get ZERO(): Readonly<Matrix4>;
    get ELEMENTS(): number;
    get RANK(): number;
    get INDICES(): typeof INDICES;
    constructor(array?: Readonly<NumericArray>);
    copy(array: Readonly<NumericArray>): this;
    set(m00: number, m10: number, m20: number, m30: number, m01: number, m11: number, m21: number, m31: number, m02: number, m12: number, m22: number, m32: number, m03: number, m13: number, m23: number, m33: number): this;
    setRowMajor(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): this;
    toRowMajor(result: NumericArray): NumericArray;
    /** Set to identity matrix */
    identity(): this;
    /**
     *
     * @param object
     * @returns self
     */
    fromObject(object: {
        [key: string]: any;
    }): this;
    /**
     * Calculates a 4x4 matrix from the given quaternion
     * @param quaternion Quaternion to create matrix from
     * @returns self
     */
    fromQuaternion(quaternion: Readonly<NumericArray>): this;
    /**
     * Generates a frustum matrix with the given bounds
     * @param view.left - Left bound of the frustum
     * @param view.right - Right bound of the frustum
     * @param view.bottom - Bottom bound of the frustum
     * @param view.top - Top bound of the frustum
     * @param view.near - Near bound of the frustum
     * @param view.far - Far bound of the frustum. Can be set to Infinity.
     * @returns self
     */
    frustum(view: {
        left: number;
        right: number;
        bottom: number;
        top: number;
        near: number;
        far?: number;
    }): this;
    /**
     * Generates a look-at matrix with the given eye position, focal point,
     * and up axis
     * @param view.eye - (vector) Position of the viewer
     * @param view.center - (vector) Point the viewer is looking at
     * @param view.up - (vector) Up axis
     * @returns self
     */
    lookAt(view: {
        eye: Readonly<NumericArray>;
        center?: Readonly<NumericArray>;
        up?: Readonly<NumericArray>;
    }): this;
    /**
     * Generates a orthogonal projection matrix with the given bounds
     * from "traditional" view space parameters
     * @param view.left - Left bound of the frustum
     * @param view.right number  Right bound of the frustum
     * @param view.bottom - Bottom bound of the frustum
     * @param view.top number  Top bound of the frustum
     * @param view.near - Near bound of the frustum
     * @param view.far number  Far bound of the frustum
     * @returns self
     */
    ortho(view: {
        left: number;
        right: number;
        bottom: number;
        top: number;
        near?: number;
        far?: number;
    }): this;
    /**
     * Generates an orthogonal projection matrix with the same parameters
     * as a perspective matrix (plus focalDistance)
     * @param view.fovy Vertical field of view in radians
     * @param view.aspect Aspect ratio. Typically viewport width / viewport height
     * @param view.focalDistance Distance in the view frustum used for extent calculations
     * @param view.near Near bound of the frustum
     * @param view.far Far bound of the frustum
     * @returns self
     */
    orthographic(view: {
        fovy?: number;
        aspect?: number;
        focalDistance?: number;
        near?: number;
        far?: number;
    }): this;
    /**
     * Generates a perspective projection matrix with the given bounds
     * @param view.fovy Vertical field of view in radians
     * @param view.aspect Aspect ratio. typically viewport width/height
     * @param view.near Near bound of the frustum
     * @param view.far Far bound of the frustum
     * @returns self
     */
    perspective(view: {
        fovy: number;
        aspect?: number;
        near?: number;
        far?: number;
    }): this;
    determinant(): number;
    /**
     * Extracts the non-uniform scale assuming the matrix is an affine transformation.
     * The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
     * @param result
     * @returns self
     */
    getScale(result?: NumericArray): NumericArray;
    /**
     * Gets the translation portion, assuming the matrix is a affine transformation matrix.
     * @param result
     * @returns self
     */
    getTranslation(result?: NumericArray): NumericArray;
    /**
     * Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
     * @param result
     * @param scaleResult
     * @returns self
     */
    getRotation(result?: NumericArray, scaleResult?: NumericArray): NumericArray;
    /**
     *
     * @param result
     * @param scaleResult
     * @returns self
     */
    getRotationMatrix3(result?: NumericArray, scaleResult?: NumericArray): NumericArray;
    transpose(): this;
    invert(): this;
    multiplyLeft(a: Readonly<NumericArray>): this;
    multiplyRight(a: Readonly<NumericArray>): this;
    rotateX(radians: number): this;
    rotateY(radians: number): this;
    /**
     * Rotates a matrix by the given angle around the Z axis.
     * @param radians
     * @returns self
     */
    rotateZ(radians: number): this;
    /**
     *
     * @param param0
     * @returns self
     */
    rotateXYZ(angleXYZ: Readonly<NumericArray>): this;
    /**
     *
     * @param radians
     * @param axis
     * @returns self
     */
    rotateAxis(radians: number, axis: Readonly<NumericArray>): this;
    /**
     *
     * @param factor
     * @returns self
     */
    scale(factor: number | Readonly<NumericArray>): this;
    /**
     *
     * @param vec
     * @returns self
     */
    translate(vector: Readonly<NumericArray>): this;
    /**
     * Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
     * @param vector
     * @param result
     * @returns self
     */
    transform(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    /**
     * Transforms any 2 or 3 element array as point (w implicitly 1)
     * @param vector
     * @param result
     * @returns self
     */
    transformAsPoint(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    /**
     * Transforms any 2 or 3 element array as vector (w implicitly 0)
     * @param vector
     * @param result
     * @returns self
     */
    transformAsVector(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    /** @deprecated */
    transformPoint(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    /** @deprecated */
    transformVector(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    /** @deprecated */
    transformDirection(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray;
    makeRotationX(radians: number): this;
    makeTranslation(x: number, y: number, z: number): this;
}
export {};
//# sourceMappingURL=matrix4.d.ts.map