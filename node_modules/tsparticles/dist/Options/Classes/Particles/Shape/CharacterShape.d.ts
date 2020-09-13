import type { ICharacterShape } from "../../../Interfaces/Particles/Shape/ICharacterShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { ShapeBase } from "./ShapeBase";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export declare class CharacterShape extends ShapeBase implements ICharacterShape {
    font: string;
    style: string;
    value: SingleOrMultiple<string>;
    weight: string;
    constructor();
    load(data?: RecursivePartial<ICharacterShape>): void;
}
