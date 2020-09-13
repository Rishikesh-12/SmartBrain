import type { IParticlesNumber } from "../../Interfaces/Particles/IParticlesNumber";
import { Density } from "./Density";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class ParticlesNumber implements IParticlesNumber {
    get max(): number;
    set max(value: number);
    density: Density;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
