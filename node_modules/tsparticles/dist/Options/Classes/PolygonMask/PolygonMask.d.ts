import type { IPolygonMask } from "../../Interfaces/PolygonMask/IPolygonMask";
import { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import { Draw } from "./Draw";
import { Move } from "./Move";
import { PolygonMaskInlineArrangement } from "../../../Enums/PolygonMaskInlineArrangement";
import { PolygonInline } from "./PolygonInline";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
export declare class PolygonMask implements IPolygonMask {
    get inlineArrangement(): PolygonMaskInlineArrangement;
    set inlineArrangement(value: PolygonMaskInlineArrangement);
    draw: Draw;
    enable: boolean;
    inline: PolygonInline;
    move: Move;
    position?: ICoordinates;
    scale: number;
    type: PolygonMaskType;
    url: string;
    constructor();
    load(data?: RecursivePartial<IPolygonMask>): void;
}
