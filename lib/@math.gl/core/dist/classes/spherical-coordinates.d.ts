import { NumericArray } from '@math.gl/types';
import { Vector3 } from "./vector3.js";
type SphericalCoordinatesOptions = {
    phi?: number;
    theta?: number;
    radius?: number;
    bearing?: number;
    pitch?: number;
    altitude?: number;
    radiusScale?: number;
};
type FormatOptions = {
    printTypes?: boolean;
};
/**
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.
 * @link https://en.wikipedia.org/wiki/Spherical_coordinate_system
 */
export declare class SphericalCoordinates {
    phi: number;
    theta: number;
    radius: number;
    radiusScale: number;
    /**
     * Creates a new SphericalCoordinates object
     * @param options
     * @param [options.phi] =0 - rotation around X (latitude)
     * @param [options.theta] =0 - rotation around Y (longitude)
     * @param [options.radius] =1 - Distance from center
     * @param [options.bearing]
     * @param [options.pitch]
     * @param [options.altitude]
     * @param [options.radiusScale] =1
     */
    constructor({ phi, theta, radius, bearing, pitch, altitude, radiusScale }?: SphericalCoordinatesOptions);
    toString(): string;
    formatString({ printTypes }: FormatOptions): string;
    equals(other: SphericalCoordinates): boolean;
    exactEquals(other: SphericalCoordinates): boolean;
    get bearing(): number;
    set bearing(v: number);
    get pitch(): number;
    set pitch(v: number);
    get longitude(): number;
    get latitude(): number;
    get lng(): number;
    get lat(): number;
    get z(): number;
    set(radius: number, phi: number, theta: number): this;
    clone(): SphericalCoordinates;
    copy(other: SphericalCoordinates): this;
    fromLngLatZ([lng, lat, z]: [number, number, number]): this;
    fromVector3(v: Readonly<NumericArray>): this;
    toVector3(): Vector3;
    makeSafe(): this;
    check(): this;
}
export {};
//# sourceMappingURL=spherical-coordinates.d.ts.map