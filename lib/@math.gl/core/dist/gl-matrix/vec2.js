// @eslint-disable
// @ts-nocheck
import * as glMatrix from './common.js';
/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns a new 2D vector
 */
export function create() {
    const out = new glMatrix.ARRAY_TYPE(2);
    if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
    }
    return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param a vector to clone
 * @returns a new 2D vector
 */
export function clone(a) {
    const out = new glMatrix.ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param x X component
 * @param y Y component
 * @returns a new 2D vector
 */
export function fromValues(x, y) {
    const out = new glMatrix.ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the source vector
 * @returns {NumericArray} out
 */
export function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {NumericArray} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {NumericArray} out
 */
export function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
/**
 * Adds two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
/**
 * Divides two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to ceil
 * @returns {NumericArray} out
 */
export function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to floor
 * @returns {NumericArray} out
 */
export function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {NumericArray} out
 */
export function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
}
/**
 * symmetric round the components of a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to round
 * @returns {NumericArray} out
 */
export function round(out, a) {
    out[0] = glMatrix.round(a[0]);
    out[1] = glMatrix.round(a[1]);
    return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {NumericArray} out
 */
export function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {NumericArray} out
 */
export function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {Readonly<NumericArray>} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a) {
    const x = a[0];
    const y = a[1];
    return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {Readonly<NumericArray>} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a) {
    const x = a[0];
    const y = a[1];
    return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to negate
 * @returns {NumericArray} out
 */
export function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to invert
 * @returns {NumericArray} out
 */
export function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
/**
 * Normalize a vec2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a vector to normalize
 * @returns {NumericArray} out
 */
export function normalize(out, a) {
    const x = a[0];
    const y = a[1];
    let len = x * x + y * y;
    if (len > 0) {
        // TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @returns {vec3} out
 */
export function cross(out, a, b) {
    const z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the first operand
 * @param {Readonly<NumericArray>} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {NumericArray} out
 */
export function lerp(out, a, b, t) {
    const ax = a[0];
    const ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {NumericArray} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {NumericArray} out
 */
export function random(out, scale) {
    scale = scale === undefined ? 1.0 : scale;
    const r = glMatrix.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {NumericArray} out
 */
export function transformMat2(out, a, m) {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {NumericArray} out
 */
export function transformMat2d(out, a, m) {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {NumericArray} out
 */
export function transformMat3(out, a, m) {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {NumericArray} out the receiving vector
 * @param {Readonly<NumericArray>} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {NumericArray} out
 */
export function transformMat4(out, a, m) {
    const x = a[0];
    const y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
/**
 * Rotate a 2D vector
 * @param {NumericArray} out The receiving vec2
 * @param {Readonly<NumericArray>} a The vec2 point to rotate
 * @param {Readonly<NumericArray>} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {NumericArray} out
 */
export function rotate(out, a, b, rad) {
    // Translate point to the origin
    const p0 = a[0] - b[0];
    const p1 = a[1] - b[1];
    const sinC = Math.sin(rad);
    const cosC = Math.cos(rad);
    // perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {Readonly<NumericArray>} a The first operand
 * @param {Readonly<NumericArray>} b The second operand
 * @returns {Number} The angle in radians
 */
export function angle(a, b) {
    const x1 = a[0];
    const y1 = a[1];
    const x2 = b[0];
    const y2 = b[1];
    // mag is the product of the magnitudes of a and b
    const mag = Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2));
    // mag &&.. short circuits if mag == 0
    const cosine = mag && (x1 * x2 + y1 * y2) / mag;
    // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {NumericArray} out the receiving vector
 * @returns {NumericArray} out
 */
export function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {Readonly<NumericArray>} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
export function str(a) {
    return `vec2(${a[0]}, ${a[1]})`;
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {Readonly<NumericArray>} a The first vector.
 * @param {Readonly<NumericArray>} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {Readonly<NumericArray>} a The first vector.
 * @param {Readonly<NumericArray>} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a, b) {
    const a0 = a[0];
    const a1 = a[1];
    const b0 = b[0];
    const b1 = b[1];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */
export const len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */
export const sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */
export const mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */
export const div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */
export const dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
export const sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
export const sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
export const forEach = (function () {
    const vec = create();
    return function (a, stride, offset, count, fn, arg) {
        let i;
        let l;
        if (!stride) {
            stride = 2;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
})();
//# sourceMappingURL=vec2.js.map