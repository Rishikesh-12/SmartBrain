import type { IOptionLoader } from "../IOptionLoader";
import type { IColor } from "../../../Core/Interfaces/IColor";
import type { IBackgroundMaskCover } from "./IBackgroundMaskCover";
export interface IBackgroundMask extends IOptionLoader<IBackgroundMask> {
    cover: IBackgroundMaskCover | IColor | string;
    enable: boolean;
}
