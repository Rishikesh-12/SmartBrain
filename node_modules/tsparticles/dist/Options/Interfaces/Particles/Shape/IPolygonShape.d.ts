import type { IOptionLoader } from "../../IOptionLoader";
import type { IShapeValues } from "./IShapeValues";
export interface IPolygonShape extends IShapeValues, IOptionLoader<IPolygonShape> {
    nb_sides: number;
    sides: number;
}
