import type { IClickEvent } from "./IClickEvent";
import type { IHoverEvent } from "./IHoverEvent";
import type { IDivEvent } from "./IDivEvent";
import type { IOptionLoader } from "../../IOptionLoader";
export interface IEvents extends IOptionLoader<IEvents> {
    onclick: IClickEvent;
    onhover: IHoverEvent;
    ondiv: IDivEvent;
    onClick: IClickEvent;
    onHover: IHoverEvent;
    onDiv: IDivEvent;
    resize: boolean;
}
