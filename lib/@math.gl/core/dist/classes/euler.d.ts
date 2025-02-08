import { MathArray } from "./base/math-array.js";
import { Quaternion } from "./quaternion.js";
import { NumericArray } from '@math.gl/types';
declare enum RotationOrder {
    ZYX = 0,
    YXZ = 1,
    XZY = 2,
    ZXY = 3,
    YZX = 4,
    XYZ = 5
}
export declare class Euler extends MathArray {
    static get ZYX(): RotationOrder;
    static get YXZ(): RotationOrder;
    static get XZY(): RotationOrder;
    static get ZXY(): RotationOrder;
    static get YZX(): RotationOrder;
    static get XYZ(): RotationOrder;
    static get RollPitchYaw(): RotationOrder;
    static get DefaultOrder(): RotationOrder;
    static get RotationOrders(): typeof RotationOrder;
    static rotationOrder(order: RotationOrder): string;
    get ELEMENTS(): number;
    /**
     * @class
     * @param {Number | Number[]} x
     * @param {Number=} [y]
     * @param {Number=} [z]
     * @param {Number=} [order]
     */
    constructor(x?: number, y?: number, z?: number, order?: RotationOrder);
    fromQuaternion(quaternion: Readonly<NumericArray>): this;
    fromObject(object: Record<string, unknown>): this;
    copy(array: Readonly<NumericArray>): this;
    set(x: number, y: number, z: number, order: RotationOrder): this;
    validate(): boolean;
    toArray(array?: NumericArray, offset?: number): NumericArray;
    toArray4(array?: NumericArray, offset?: number): NumericArray;
    toVector3(result?: NumericArray): NumericArray;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get alpha(): number;
    set alpha(value: number);
    get beta(): number;
    set beta(value: number);
    get gamma(): number;
    set gamma(value: number);
    get phi(): number;
    set phi(value: number);
    get theta(): number;
    set theta(value: number);
    get psi(): number;
    set psi(value: number);
    get roll(): number;
    set roll(value: number);
    get pitch(): number;
    set pitch(value: number);
    get yaw(): number;
    set yaw(value: number);
    get order(): RotationOrder;
    set order(value: RotationOrder);
    fromVector3(v: Readonly<NumericArray>, order: RotationOrder): this;
    fromArray(array: Readonly<NumericArray>, offset?: number): this;
    fromRollPitchYaw(roll: number, pitch: number, yaw: number): this;
    fromRotationMatrix(m: Readonly<NumericArray>, order?: RotationOrder): this;
    getRotationMatrix(m: NumericArray): NumericArray;
    getQuaternion(): Quaternion;
    _fromRotationMatrix(m: Readonly<NumericArray>, order?: RotationOrder): this;
    _getRotationMatrix(result: NumericArray): NumericArray;
    toQuaternion(): Quaternion;
}
export {};
//# sourceMappingURL=euler.d.ts.map