import type { IPolygonShape } from "../../../Interfaces/Particles/Shape/IPolygonShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { ShapeBase } from "./ShapeBase";
export declare class PolygonShape extends ShapeBase implements IPolygonShape {
    get nb_sides(): number;
    set nb_sides(value: number);
    sides: number;
    constructor();
    load(data?: RecursivePartial<IPolygonShape>): void;
}
