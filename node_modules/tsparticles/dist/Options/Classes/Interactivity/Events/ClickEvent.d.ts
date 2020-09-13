import type { IClickEvent } from "../../../Interfaces/Interactivity/Events/IClickEvent";
import { ClickMode } from "../../../../Enums/Modes/ClickMode";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export declare class ClickEvent implements IClickEvent {
    enable: boolean;
    mode: SingleOrMultiple<ClickMode | string>;
    constructor();
    load(data?: RecursivePartial<IClickEvent>): void;
}
