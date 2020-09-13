import type { INoiseRandom } from "../../../Interfaces/Particles/Noise/INoiseRandom";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class NoiseRandom implements INoiseRandom {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<INoiseRandom>): void;
}
