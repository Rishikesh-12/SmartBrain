import type { IPlugin } from "../../Core/Interfaces/IPlugin";
import { PolygonMask } from "./PolygonMask";
import type { Container } from "../../Core/Container";
export declare class PolygonMaskPlugin implements IPlugin {
    readonly id: string;
    constructor();
    getPlugin(container: Container): PolygonMask;
    needsPlugin(container: Container): boolean;
}
