import type { IPolygonMaskMove } from "../../Interfaces/PolygonMask/IPolygonMaskMove";
import { PolygonMaskMoveType } from "../../../Enums/PolygonMaskMoveType";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class Move implements IPolygonMaskMove {
    radius: number;
    type: PolygonMaskMoveType;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskMove>): void;
}
