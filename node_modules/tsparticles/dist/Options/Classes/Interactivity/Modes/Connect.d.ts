import type { IConnect } from "../../../Interfaces/Interactivity/Modes/IConnect";
import { ConnectLineLinked } from "./ConnectLineLinked";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Connect implements IConnect {
    get line_linked(): ConnectLineLinked;
    set line_linked(value: ConnectLineLinked);
    distance: number;
    lineLinked: ConnectLineLinked;
    radius: number;
    constructor();
    load(data?: RecursivePartial<IConnect>): void;
}
