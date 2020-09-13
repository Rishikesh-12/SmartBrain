import type { INoise } from "../../../Interfaces/Particles/Noise/INoise";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { NoiseDelay } from "./NoiseDelay";
import { NoiseFactor } from "./NoiseFactor";
export declare class Noise implements INoise {
    delay: NoiseDelay;
    enable: boolean;
    factor: NoiseFactor;
    constructor();
    load(data?: RecursivePartial<INoise>): void;
}
