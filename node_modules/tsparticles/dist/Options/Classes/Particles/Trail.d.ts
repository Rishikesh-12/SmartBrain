import type { ITrail } from "../../Interfaces/Particles/ITrail";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { OptionsColor } from "./OptionsColor";
export declare class Trail implements ITrail {
    enable: boolean;
    length: number;
    fillColor: OptionsColor;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
