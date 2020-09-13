import type { ISizeAnimation } from "../../../Interfaces/Particles/Size/ISizeAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { StartValueType } from "../../../../Enums/StartValueType";
import { DestroyType } from "../../../../Enums/DestroyType";
export declare class SizeAnimation implements ISizeAnimation {
    get size_min(): number;
    set size_min(value: number);
    destroy: DestroyType;
    enable: boolean;
    minimumValue: number;
    speed: number;
    startValue: StartValueType;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ISizeAnimation>): void;
}
