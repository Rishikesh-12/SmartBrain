import type { IShape } from "../../../Interfaces/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums/ShapeType";
import { ImageShape } from "./ImageShape";
import { PolygonShape } from "./PolygonShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import { ShapeData } from "../../../../Types/ShapeData";
import { CharacterShape } from "./CharacterShape";
import { Stroke } from "../Stroke";
export declare class Shape implements IShape {
    get image(): SingleOrMultiple<ImageShape>;
    set image(value: SingleOrMultiple<ImageShape>);
    get custom(): ShapeData;
    set custom(value: ShapeData);
    get images(): ImageShape[];
    set images(value: ImageShape[]);
    get stroke(): SingleOrMultiple<Stroke>;
    set stroke(_value: SingleOrMultiple<Stroke>);
    get character(): SingleOrMultiple<CharacterShape>;
    set character(value: SingleOrMultiple<CharacterShape>);
    get polygon(): SingleOrMultiple<PolygonShape>;
    set polygon(value: SingleOrMultiple<PolygonShape>);
    type: SingleOrMultiple<ShapeType | string>;
    options: ShapeData;
    constructor();
    load(data?: RecursivePartial<IShape>): void;
}
