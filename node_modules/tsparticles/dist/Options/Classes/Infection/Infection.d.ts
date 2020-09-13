import type { IInfection } from "../../Interfaces/Infection/IInfection";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { InfectionStage } from "./InfectionStage";
export declare class Infection implements IInfection {
    cure: boolean;
    delay: number;
    enable: boolean;
    infections: number;
    stages: InfectionStage[];
    constructor();
    load(data?: RecursivePartial<IInfection>): void;
}
