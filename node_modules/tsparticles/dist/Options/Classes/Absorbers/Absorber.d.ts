import type { IAbsorber } from "../../Interfaces/Absorbers/IAbsorber";
import type { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { AbsorberSize } from "./AbsorberSize";
import { OptionsColor } from "../Particles/OptionsColor";
export declare class Absorber implements IAbsorber {
    color: OptionsColor;
    opacity: number;
    position?: ICoordinates;
    size: AbsorberSize;
    constructor();
    load(data?: RecursivePartial<IAbsorber>): void;
}
