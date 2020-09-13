import type { IEmitterLife } from "../../Interfaces/Emitters/IEmitterLife";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class EmitterLife implements IEmitterLife {
    count?: number;
    delay?: number;
    duration?: number;
    constructor();
    load(data?: RecursivePartial<IEmitterLife>): void;
}
