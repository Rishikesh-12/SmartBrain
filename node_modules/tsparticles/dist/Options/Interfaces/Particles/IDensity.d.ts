import type { IOptionLoader } from "../IOptionLoader";
export interface IDensity extends IOptionLoader<IDensity> {
    area: number;
    enable: boolean;
    factor: number;
    value_area: number;
}
