import type { INoiseFactor } from "../../../Interfaces/Particles/Noise/INoiseFactor";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { NoiseValue } from "./NoiseValue";
export declare class NoiseFactor implements INoiseFactor {
    horizontal: NoiseValue;
    vertical: NoiseValue;
    constructor();
    load(data?: RecursivePartial<INoiseFactor>): void;
}
