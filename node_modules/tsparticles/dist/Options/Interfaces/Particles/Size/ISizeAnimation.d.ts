import type { IOptionLoader } from "../../IOptionLoader";
import type { StartValueType } from "../../../../Enums/StartValueType";
import type { DestroyType } from "../../../../Enums/DestroyType";
export interface ISizeAnimation extends IOptionLoader<ISizeAnimation> {
    enable: boolean;
    size_min: number;
    minimumValue: number;
    speed: number;
    sync: boolean;
    startValue: StartValueType;
    destroy: DestroyType;
}
