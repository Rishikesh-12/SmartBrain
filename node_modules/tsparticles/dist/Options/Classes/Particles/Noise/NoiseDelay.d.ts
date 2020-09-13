import type { INoiseDelay } from "../../../Interfaces/Particles/Noise/INoiseDelay";
import { NoiseRandom } from "./NoiseRandom";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class NoiseDelay implements INoiseDelay {
    random: NoiseRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<INoiseDelay>): void;
}
