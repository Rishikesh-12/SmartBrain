import type { INoiseValue } from "../../../Interfaces/Particles/Noise/INoiseValue";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class NoiseValue implements INoiseValue {
    value: number;
    offset: number;
    constructor();
    load(data?: RecursivePartial<INoiseValue>): void;
}
