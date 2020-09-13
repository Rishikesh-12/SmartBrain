import type { IBackgroundMask } from "../../Interfaces/BackgroundMask/IBackgroundMask";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { BackgroundMaskCover } from "./BackgroundMaskCover";
export declare class BackgroundMask implements IBackgroundMask {
    cover: BackgroundMaskCover;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
