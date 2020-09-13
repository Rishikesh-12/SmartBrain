import type { IOpacityAnimation } from "./IOpacityAnimation";
import type { IOptionLoader } from "../../IOptionLoader";
import type { IOpacityRandom } from "./IOpacityRandom";
export interface IOpacity extends IOptionLoader<IOpacity> {
    value: number;
    random: boolean | IOpacityRandom;
    anim: IOpacityAnimation;
    animation: IOpacityAnimation;
}
