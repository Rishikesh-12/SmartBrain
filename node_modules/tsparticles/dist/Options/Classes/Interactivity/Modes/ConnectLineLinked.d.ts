import type { IConnectLineLinked } from "../../../Interfaces/Interactivity/Modes/IConnectLineLinked";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class ConnectLineLinked implements IConnectLineLinked {
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IConnectLineLinked>): void;
}
