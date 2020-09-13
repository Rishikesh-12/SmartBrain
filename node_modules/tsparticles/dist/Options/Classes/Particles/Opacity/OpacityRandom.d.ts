import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOpacityRandom } from "../../../Interfaces/Particles/Opacity/IOpacityRandom";
export declare class OpacityRandom implements IOpacityRandom {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IOpacityRandom> | undefined): void;
}
