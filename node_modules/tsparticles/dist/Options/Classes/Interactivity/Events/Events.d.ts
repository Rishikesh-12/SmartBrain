import type { IEvents } from "../../../Interfaces/Interactivity/Events/IEvents";
import { ClickEvent } from "./ClickEvent";
import { DivEvent } from "./DivEvent";
import { HoverEvent } from "./HoverEvent";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Events implements IEvents {
    get onclick(): ClickEvent;
    set onclick(value: ClickEvent);
    get ondiv(): DivEvent;
    set ondiv(value: DivEvent);
    get onhover(): HoverEvent;
    set onhover(value: HoverEvent);
    onClick: ClickEvent;
    onDiv: DivEvent;
    onHover: HoverEvent;
    resize: boolean;
    constructor();
    load(data?: RecursivePartial<IEvents>): void;
}
