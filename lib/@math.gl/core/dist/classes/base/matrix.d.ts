import { NumericArray } from '@math.gl/types';
import { MathArray } from "./math-array.js";
/** Base class for matrices */
export declare abstract class Matrix extends MathArray {
    abstract get RANK(): number;
    toString(): string;
    getElementIndex(row: number, col: number): number;
    getElement(row: number, col: number): number;
    setElement(row: number, col: number, value: number): this;
    getColumn<NumArrayT>(columnIndex: number, result: NumArrayT): NumArrayT;
    getColumn(columnIndex: number): number[];
    setColumn(columnIndex: number, columnVector: Readonly<NumericArray>): this;
}
//# sourceMappingURL=matrix.d.ts.map