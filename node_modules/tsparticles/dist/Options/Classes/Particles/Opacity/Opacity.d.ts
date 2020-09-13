import type { IOpacity } from "../../../Interfaces/Particles/Opacity/IOpacity";
import { OpacityAnimation } from "./OpacityAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OpacityRandom } from "./OpacityRandom";
export declare class Opacity implements IOpacity {
    get anim(): OpacityAnimation;
    set anim(value: OpacityAnimation);
    animation: OpacityAnimation;
    random: OpacityRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
