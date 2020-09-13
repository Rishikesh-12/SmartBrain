import type { IPlugin } from "../../Core/Interfaces/IPlugin";
import type { Container } from "../../Core/Container";
import { Absorbers } from "./Absorbers";
export declare class AbsorbersPlugin implements IPlugin {
    readonly id: string;
    constructor();
    getPlugin(container: Container): Absorbers;
    needsPlugin(container: Container): boolean;
}
