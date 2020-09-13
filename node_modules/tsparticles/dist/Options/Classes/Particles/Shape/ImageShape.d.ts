import type { IImageShape } from "../../../Interfaces/Particles/Shape/IImageShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { ShapeBase } from "./ShapeBase";
export declare class ImageShape extends ShapeBase implements IImageShape {
    get replace_color(): boolean;
    set replace_color(value: boolean);
    height: number;
    replaceColor: boolean;
    src: string;
    width: number;
    constructor();
    load(data?: RecursivePartial<IImageShape>): void;
}
