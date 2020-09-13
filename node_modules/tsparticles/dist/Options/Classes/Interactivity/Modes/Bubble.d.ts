import type { IBubble } from "../../../Interfaces/Interactivity/Modes/IBubble";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OptionsColor } from "../../Particles/OptionsColor";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export declare class Bubble implements IBubble {
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
    color?: SingleOrMultiple<OptionsColor>;
    constructor();
    load(data?: RecursivePartial<IBubble>): void;
}
