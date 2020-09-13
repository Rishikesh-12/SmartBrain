import type { IPolygonMaskDraw } from "../../Interfaces/PolygonMask/IPolygonMaskDraw";
import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { OptionsColor } from "../Particles/OptionsColor";
export declare class Draw implements IPolygonMaskDraw {
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineColor(): string | OptionsColor;
    set lineColor(value: string | OptionsColor);
    enable: boolean;
    stroke: PolygonMaskDrawStroke;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDraw>): void;
}
