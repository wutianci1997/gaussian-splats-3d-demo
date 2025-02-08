import { Matrix4 } from "./matrix4.js";
import { Vector3 } from "./vector3.js";
import { Euler } from "./euler.js";
import { NumericArray } from '@math.gl/types';
type PoseOptions = {
    position?: Readonly<NumericArray>;
    orientation?: Readonly<NumericArray>;
    x?: number;
    y?: number;
    z?: number;
    roll?: number;
    pitch?: number;
    yaw?: number;
};
export declare class Pose {
    readonly position: Vector3;
    readonly orientation: Euler;
    constructor({ x, y, z, roll, pitch, yaw, position, orientation }?: PoseOptions);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get roll(): number;
    set roll(value: number);
    get pitch(): number;
    set pitch(value: number);
    get yaw(): number;
    set yaw(value: number);
    getPosition(): Vector3;
    getOrientation(): Euler;
    equals(pose: Pose): boolean;
    exactEquals(pose: Pose): boolean;
    getTransformationMatrix(): Matrix4;
    getTransformationMatrixFromPose(pose: Pose): Matrix4;
    getTransformationMatrixToPose(pose: Pose): Matrix4;
}
export {};
//# sourceMappingURL=pose.d.ts.map