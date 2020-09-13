import type { IGrabLineLinked } from "./IGrabLineLinked";
import type { IOptionLoader } from "../../IOptionLoader";
export interface IGrab extends IOptionLoader<IGrab> {
    distance: number;
    line_linked: IGrabLineLinked;
    lineLinked: IGrabLineLinked;
}
