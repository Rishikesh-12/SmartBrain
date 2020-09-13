import type { IInfectionStage } from "../../Interfaces/Infection/IInfectionStage";
import { OptionsColor } from "../Particles/OptionsColor";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class InfectionStage implements IInfectionStage {
    color: OptionsColor;
    duration?: number;
    infectedStage?: number;
    radius: number;
    rate: number;
    constructor();
    load(data?: RecursivePartial<IInfectionStage>): void;
}
