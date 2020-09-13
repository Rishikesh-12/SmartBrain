import type { IGrab } from "../../../Interfaces/Interactivity/Modes/IGrab";
import { GrabLineLinked } from "./GrabLineLinked";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Grab implements IGrab {
    get line_linked(): GrabLineLinked;
    set line_linked(value: GrabLineLinked);
    distance: number;
    lineLinked: GrabLineLinked;
    constructor();
    load(data?: RecursivePartial<IGrab>): void;
}
