import type { IAbsorberRandomSize } from "../../Interfaces/Absorbers/IAbsorberRandomSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class AbsorberRandomSize implements IAbsorberRandomSize {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberRandomSize>): void;
}
