import type { ILineLinked } from "../../../Interfaces/Particles/LineLinked/ILineLinked";
import { LineLinkedShadow } from "./LineLinkedShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OptionsColor } from "../OptionsColor";
export declare class LineLinked implements ILineLinked {
    blink: boolean;
    color: OptionsColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    opacity: number;
    shadow: LineLinkedShadow;
    width: number;
    constructor();
    load(data?: RecursivePartial<ILineLinked>): void;
}
