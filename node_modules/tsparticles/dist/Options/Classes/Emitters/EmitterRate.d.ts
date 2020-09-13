import type { IEmitterRate } from "../../Interfaces/Emitters/IEmitterRate";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class EmitterRate implements IEmitterRate {
    quantity: number;
    delay: number;
    constructor();
    load(data?: RecursivePartial<IEmitterRate>): void;
}
