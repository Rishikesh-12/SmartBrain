import type { IDivEvent } from "../../../Interfaces/Interactivity/Events/IDivEvent";
import { DivMode } from "../../../../Enums/Modes/DivMode";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export declare class DivEvent implements IDivEvent {
    get el(): string;
    set el(value: string);
    elementId: string;
    enable: boolean;
    mode: SingleOrMultiple<DivMode | string>;
    constructor();
    load(data?: RecursivePartial<IDivEvent>): void;
}
