import type { ILineLinkedShadow } from "../../../Interfaces/Particles/LineLinked/ILineLinkedShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OptionsColor } from "../OptionsColor";
export declare class LineLinkedShadow implements ILineLinkedShadow {
    blur: number;
    color: OptionsColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ILineLinkedShadow>): void;
}
