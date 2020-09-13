import type { IRepulse } from "../../../Interfaces/Interactivity/Modes/IRepulse";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Repulse implements IRepulse {
    distance: number;
    duration: number;
    speed: number;
    constructor();
    load(data?: RecursivePartial<IRepulse>): void;
}
