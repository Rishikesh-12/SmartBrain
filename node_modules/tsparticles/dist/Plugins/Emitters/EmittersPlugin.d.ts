import type { IPlugin } from "../../Core/Interfaces/IPlugin";
import type { Container } from "../../Core/Container";
import { Emitters } from "./Emitters";
export declare class EmittersPlugin implements IPlugin {
    readonly id: string;
    constructor();
    getPlugin(container: Container): Emitters;
    needsPlugin(container: Container): boolean;
}
