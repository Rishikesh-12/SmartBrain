import type { IOptionLoader } from "../../IOptionLoader";
export interface IOpacityAnimation extends IOptionLoader<IOpacityAnimation> {
    enable: boolean;
    speed: number;
    opacity_min: number;
    minimumValue: number;
    sync: boolean;
}
