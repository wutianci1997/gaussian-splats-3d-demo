// math.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors
// Copyright (c) 2017 Uber Technologies, Inc.
import { Matrix } from "./base/matrix.js";
import { checkVector } from "../lib/validators.js";
/* eslint-disable camelcase */
import { vec2_transformMat4AsVector, vec3_transformMat4AsVector } from "../lib/gl-matrix-extras.js";
// @ts-ignore gl-matrix types...
import { fromQuat as mat4_fromQuat, frustum as mat4_frustum, lookAt as mat4_lookAt, ortho as mat4_ortho, perspective as mat4_perspective, determinant as mat4_determinant, transpose as mat4_transpose, invert as mat4_invert, multiply as mat4_multiply, rotateX as mat4_rotateX, rotateY as mat4_rotateY, rotateZ as mat4_rotateZ, rotate as mat4_rotate, scale as mat4_scale, translate as mat4_translate } from "../gl-matrix/mat4.js";
import { transformMat4 as vec2_transformMat4 } from "../gl-matrix/vec2.js";
import { transformMat4 as vec3_transformMat4 } from "../gl-matrix/vec3.js";
import { transformMat4 as vec4_transformMat4 } from "../gl-matrix/vec4.js";
// eslint-disable-next-line no-shadow
var INDICES;
(function (INDICES) {
    INDICES[INDICES["COL0ROW0"] = 0] = "COL0ROW0";
    INDICES[INDICES["COL0ROW1"] = 1] = "COL0ROW1";
    INDICES[INDICES["COL0ROW2"] = 2] = "COL0ROW2";
    INDICES[INDICES["COL0ROW3"] = 3] = "COL0ROW3";
    INDICES[INDICES["COL1ROW0"] = 4] = "COL1ROW0";
    INDICES[INDICES["COL1ROW1"] = 5] = "COL1ROW1";
    INDICES[INDICES["COL1ROW2"] = 6] = "COL1ROW2";
    INDICES[INDICES["COL1ROW3"] = 7] = "COL1ROW3";
    INDICES[INDICES["COL2ROW0"] = 8] = "COL2ROW0";
    INDICES[INDICES["COL2ROW1"] = 9] = "COL2ROW1";
    INDICES[INDICES["COL2ROW2"] = 10] = "COL2ROW2";
    INDICES[INDICES["COL2ROW3"] = 11] = "COL2ROW3";
    INDICES[INDICES["COL3ROW0"] = 12] = "COL3ROW0";
    INDICES[INDICES["COL3ROW1"] = 13] = "COL3ROW1";
    INDICES[INDICES["COL3ROW2"] = 14] = "COL3ROW2";
    INDICES[INDICES["COL3ROW3"] = 15] = "COL3ROW3";
})(INDICES || (INDICES = {}));
const DEFAULT_FOVY = (45 * Math.PI) / 180;
const DEFAULT_ASPECT = 1;
const DEFAULT_NEAR = 0.1;
const DEFAULT_FAR = 500;
const IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
/**
 * A 4x4 matrix with common linear algebra operations
 * Subclass of Array<number> meaning that it is highly compatible with other libraries
 */
export class Matrix4 extends Matrix {
    static get IDENTITY() {
        return getIdentityMatrix();
    }
    static get ZERO() {
        return getZeroMatrix();
    }
    get ELEMENTS() {
        return 16;
    }
    get RANK() {
        return 4;
    }
    get INDICES() {
        return INDICES;
    }
    constructor(array) {
        // PERF NOTE: initialize elements as double precision numbers
        super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);
        if (arguments.length === 1 && Array.isArray(array)) {
            this.copy(array);
        }
        else {
            this.identity();
        }
    }
    copy(array) {
        this[0] = array[0];
        this[1] = array[1];
        this[2] = array[2];
        this[3] = array[3];
        this[4] = array[4];
        this[5] = array[5];
        this[6] = array[6];
        this[7] = array[7];
        this[8] = array[8];
        this[9] = array[9];
        this[10] = array[10];
        this[11] = array[11];
        this[12] = array[12];
        this[13] = array[13];
        this[14] = array[14];
        this[15] = array[15];
        return this.check();
    }
    // eslint-disable-next-line max-params
    set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
        this[0] = m00;
        this[1] = m10;
        this[2] = m20;
        this[3] = m30;
        this[4] = m01;
        this[5] = m11;
        this[6] = m21;
        this[7] = m31;
        this[8] = m02;
        this[9] = m12;
        this[10] = m22;
        this[11] = m32;
        this[12] = m03;
        this[13] = m13;
        this[14] = m23;
        this[15] = m33;
        return this.check();
    }
    // accepts row major order, stores as column major
    // eslint-disable-next-line max-params
    setRowMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        this[0] = m00;
        this[1] = m10;
        this[2] = m20;
        this[3] = m30;
        this[4] = m01;
        this[5] = m11;
        this[6] = m21;
        this[7] = m31;
        this[8] = m02;
        this[9] = m12;
        this[10] = m22;
        this[11] = m32;
        this[12] = m03;
        this[13] = m13;
        this[14] = m23;
        this[15] = m33;
        return this.check();
    }
    toRowMajor(result) {
        result[0] = this[0];
        result[1] = this[4];
        result[2] = this[8];
        result[3] = this[12];
        result[4] = this[1];
        result[5] = this[5];
        result[6] = this[9];
        result[7] = this[13];
        result[8] = this[2];
        result[9] = this[6];
        result[10] = this[10];
        result[11] = this[14];
        result[12] = this[3];
        result[13] = this[7];
        result[14] = this[11];
        result[15] = this[15];
        return result;
    }
    // Constructors
    /** Set to identity matrix */
    identity() {
        return this.copy(IDENTITY_MATRIX);
    }
    /**
     *
     * @param object
     * @returns self
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fromObject(object) {
        return this.check();
    }
    /**
     * Calculates a 4x4 matrix from the given quaternion
     * @param quaternion Quaternion to create matrix from
     * @returns self
     */
    fromQuaternion(quaternion) {
        mat4_fromQuat(this, quaternion);
        return this.check();
    }
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
    frustum(view) {
        const { left, right, bottom, top, near = DEFAULT_NEAR, far = DEFAULT_FAR } = view;
        if (far === Infinity) {
            computeInfinitePerspectiveOffCenter(this, left, right, bottom, top, near);
        }
        else {
            mat4_frustum(this, left, right, bottom, top, near, far);
        }
        return this.check();
    }
    /**
     * Generates a look-at matrix with the given eye position, focal point,
     * and up axis
     * @param view.eye - (vector) Position of the viewer
     * @param view.center - (vector) Point the viewer is looking at
     * @param view.up - (vector) Up axis
     * @returns self
     */
    lookAt(view) {
        const { eye, center = [0, 0, 0], up = [0, 1, 0] } = view;
        mat4_lookAt(this, eye, center, up);
        return this.check();
    }
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
    ortho(view) {
        const { left, right, bottom, top, near = DEFAULT_NEAR, far = DEFAULT_FAR } = view;
        mat4_ortho(this, left, right, bottom, top, near, far);
        return this.check();
    }
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
    orthographic(view) {
        const { fovy = DEFAULT_FOVY, aspect = DEFAULT_ASPECT, focalDistance = 1, near = DEFAULT_NEAR, far = DEFAULT_FAR } = view;
        checkRadians(fovy);
        const halfY = fovy / 2;
        const top = focalDistance * Math.tan(halfY); // focus_plane is the distance from the camera
        const right = top * aspect;
        return this.ortho({
            left: -right,
            right,
            bottom: -top,
            top,
            near,
            far
        });
    }
    /**
     * Generates a perspective projection matrix with the given bounds
     * @param view.fovy Vertical field of view in radians
     * @param view.aspect Aspect ratio. typically viewport width/height
     * @param view.near Near bound of the frustum
     * @param view.far Far bound of the frustum
     * @returns self
     */
    perspective(view) {
        const { fovy = (45 * Math.PI) / 180, aspect = 1, near = 0.1, far = 500 } = view;
        checkRadians(fovy);
        mat4_perspective(this, fovy, aspect, near, far);
        return this.check();
    }
    // Accessors
    determinant() {
        return mat4_determinant(this);
    }
    /**
     * Extracts the non-uniform scale assuming the matrix is an affine transformation.
     * The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
     * @param result
     * @returns self
     */
    getScale(result = [-0, -0, -0]) {
        // explicit is faster than hypot...
        result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
        result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
        result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
        // result[0] = Math.hypot(this[0], this[1], this[2]);
        // result[1] = Math.hypot(this[4], this[5], this[6]);
        // result[2] = Math.hypot(this[8], this[9], this[10]);
        return result;
    }
    /**
     * Gets the translation portion, assuming the matrix is a affine transformation matrix.
     * @param result
     * @returns self
     */
    getTranslation(result = [-0, -0, -0]) {
        result[0] = this[12];
        result[1] = this[13];
        result[2] = this[14];
        return result;
    }
    /**
     * Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
     * @param result
     * @param scaleResult
     * @returns self
     */
    getRotation(result, scaleResult) {
        result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
        scaleResult = scaleResult || [-0, -0, -0];
        const scale = this.getScale(scaleResult);
        const inverseScale0 = 1 / scale[0];
        const inverseScale1 = 1 / scale[1];
        const inverseScale2 = 1 / scale[2];
        result[0] = this[0] * inverseScale0;
        result[1] = this[1] * inverseScale1;
        result[2] = this[2] * inverseScale2;
        result[3] = 0;
        result[4] = this[4] * inverseScale0;
        result[5] = this[5] * inverseScale1;
        result[6] = this[6] * inverseScale2;
        result[7] = 0;
        result[8] = this[8] * inverseScale0;
        result[9] = this[9] * inverseScale1;
        result[10] = this[10] * inverseScale2;
        result[11] = 0;
        result[12] = 0;
        result[13] = 0;
        result[14] = 0;
        result[15] = 1;
        return result;
    }
    /**
     *
     * @param result
     * @param scaleResult
     * @returns self
     */
    getRotationMatrix3(result, scaleResult) {
        result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0];
        scaleResult = scaleResult || [-0, -0, -0];
        const scale = this.getScale(scaleResult);
        const inverseScale0 = 1 / scale[0];
        const inverseScale1 = 1 / scale[1];
        const inverseScale2 = 1 / scale[2];
        result[0] = this[0] * inverseScale0;
        result[1] = this[1] * inverseScale1;
        result[2] = this[2] * inverseScale2;
        result[3] = this[4] * inverseScale0;
        result[4] = this[5] * inverseScale1;
        result[5] = this[6] * inverseScale2;
        result[6] = this[8] * inverseScale0;
        result[7] = this[9] * inverseScale1;
        result[8] = this[10] * inverseScale2;
        return result;
    }
    // Modifiers
    transpose() {
        mat4_transpose(this, this);
        return this.check();
    }
    invert() {
        mat4_invert(this, this);
        return this.check();
    }
    // Operations
    multiplyLeft(a) {
        mat4_multiply(this, a, this);
        return this.check();
    }
    multiplyRight(a) {
        mat4_multiply(this, this, a);
        return this.check();
    }
    // Rotates a matrix by the given angle around the X axis
    rotateX(radians) {
        mat4_rotateX(this, this, radians);
        // mat4_rotate(this, this, radians, [1, 0, 0]);
        return this.check();
    }
    // Rotates a matrix by the given angle around the Y axis.
    rotateY(radians) {
        mat4_rotateY(this, this, radians);
        // mat4_rotate(this, this, radians, [0, 1, 0]);
        return this.check();
    }
    /**
     * Rotates a matrix by the given angle around the Z axis.
     * @param radians
     * @returns self
     */
    rotateZ(radians) {
        mat4_rotateZ(this, this, radians);
        // mat4_rotate(this, this, radians, [0, 0, 1]);
        return this.check();
    }
    /**
     *
     * @param param0
     * @returns self
     */
    rotateXYZ(angleXYZ) {
        return this.rotateX(angleXYZ[0]).rotateY(angleXYZ[1]).rotateZ(angleXYZ[2]);
    }
    /**
     *
     * @param radians
     * @param axis
     * @returns self
     */
    rotateAxis(radians, axis) {
        mat4_rotate(this, this, radians, axis);
        return this.check();
    }
    /**
     *
     * @param factor
     * @returns self
     */
    scale(factor) {
        mat4_scale(this, this, Array.isArray(factor) ? factor : [factor, factor, factor]);
        return this.check();
    }
    /**
     *
     * @param vec
     * @returns self
     */
    translate(vector) {
        mat4_translate(this, this, vector);
        return this.check();
    }
    // Transforms
    /**
     * Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
     * @param vector
     * @param result
     * @returns self
     */
    transform(vector, result) {
        if (vector.length === 4) {
            result = vec4_transformMat4(result || [-0, -0, -0, -0], vector, this);
            checkVector(result, 4);
            return result;
        }
        return this.transformAsPoint(vector, result);
    }
    /**
     * Transforms any 2 or 3 element array as point (w implicitly 1)
     * @param vector
     * @param result
     * @returns self
     */
    transformAsPoint(vector, result) {
        const { length } = vector;
        let out;
        switch (length) {
            case 2:
                out = vec2_transformMat4(result || [-0, -0], vector, this);
                break;
            case 3:
                out = vec3_transformMat4(result || [-0, -0, -0], vector, this);
                break;
            default:
                throw new Error('Illegal vector');
        }
        checkVector(out, vector.length);
        return out;
    }
    /**
     * Transforms any 2 or 3 element array as vector (w implicitly 0)
     * @param vector
     * @param result
     * @returns self
     */
    transformAsVector(vector, result) {
        let out;
        switch (vector.length) {
            case 2:
                out = vec2_transformMat4AsVector(result || [-0, -0], vector, this);
                break;
            case 3:
                out = vec3_transformMat4AsVector(result || [-0, -0, -0], vector, this);
                break;
            default:
                throw new Error('Illegal vector');
        }
        checkVector(out, vector.length);
        return out;
    }
    /** @deprecated */
    transformPoint(vector, result) {
        return this.transformAsPoint(vector, result);
    }
    /** @deprecated */
    transformVector(vector, result) {
        return this.transformAsPoint(vector, result);
    }
    /** @deprecated */
    transformDirection(vector, result) {
        return this.transformAsVector(vector, result);
    }
    // three.js math API compatibility
    makeRotationX(radians) {
        return this.identity().rotateX(radians);
    }
    makeTranslation(x, y, z) {
        return this.identity().translate([x, y, z]);
    }
}
// TODO initializing static members directly is an option, but make sure no tree-shaking issues
let ZERO;
let IDENTITY;
function getZeroMatrix() {
    if (!ZERO) {
        ZERO = new Matrix4([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        Object.freeze(ZERO);
    }
    return ZERO;
}
function getIdentityMatrix() {
    if (!IDENTITY) {
        IDENTITY = new Matrix4();
        Object.freeze(IDENTITY);
    }
    return IDENTITY;
}
// HELPER FUNCTIONS
function checkRadians(possiblyDegrees) {
    if (possiblyDegrees > Math.PI * 2) {
        throw Error('expected radians');
    }
}
// eslint-disable-next-line max-params
function computeInfinitePerspectiveOffCenter(result, left, right, bottom, top, near) {
    const column0Row0 = (2 * near) / (right - left);
    const column1Row1 = (2 * near) / (top - bottom);
    const column2Row0 = (right + left) / (right - left);
    const column2Row1 = (top + bottom) / (top - bottom);
    const column2Row2 = -1;
    const column2Row3 = -1;
    const column3Row2 = -2 * near;
    result[0] = column0Row0;
    result[1] = 0;
    result[2] = 0;
    result[3] = 0;
    result[4] = 0;
    result[5] = column1Row1;
    result[6] = 0;
    result[7] = 0;
    result[8] = column2Row0;
    result[9] = column2Row1;
    result[10] = column2Row2;
    result[11] = column2Row3;
    result[12] = 0;
    result[13] = 0;
    result[14] = column3Row2;
    result[15] = 0;
    return result;
}
//# sourceMappingURL=matrix4.js.map