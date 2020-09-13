import type { ITwinkleValues } from "../../../Interfaces/Particles/Twinkle/ITwinkleValues";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OptionsColor } from "../OptionsColor";
export declare class TwinkleValues implements ITwinkleValues {
    color?: OptionsColor;
    enable: boolean;
    frequency: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<ITwinkleValues>): void;
}
