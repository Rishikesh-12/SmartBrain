import type { IAbsorberSize } from "../../Interfaces/Absorbers/IAbsorberSize";
import { AbsorberRandomSize } from "./AbsorberRandomSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class AbsorberSize implements IAbsorberSize {
    density: number;
    limit?: number;
    random: AbsorberRandomSize;
    value: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
