import type { IOptionLoader } from "../IOptionLoader";
import type { IColor } from "../../../Core/Interfaces/IColor";
export interface IBackgroundMaskCover extends IOptionLoader<IBackgroundMaskCover> {
    color: IColor | string;
    opacity: number;
}
