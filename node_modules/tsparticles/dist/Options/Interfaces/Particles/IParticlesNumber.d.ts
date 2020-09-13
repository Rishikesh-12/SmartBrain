import type { IDensity } from "./IDensity";
import type { IOptionLoader } from "../IOptionLoader";
export interface IParticlesNumber extends IOptionLoader<IParticlesNumber> {
    density: IDensity;
    limit: number;
    max: number;
    value: number;
}
