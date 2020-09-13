import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { ISizeRandom } from "../../../Interfaces/Particles/Size/ISizeRandom";
export declare class SizeRandom implements ISizeRandom {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<ISizeRandom> | undefined): void;
}
