import type { ClickMode } from "../../../../Enums/Modes/ClickMode";
import type { IOptionLoader } from "../../IOptionLoader";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export interface IClickEvent extends IOptionLoader<IClickEvent> {
    enable: boolean;
    mode: SingleOrMultiple<ClickMode | string>;
}
