import type { IOptionLoader } from "../IOptionLoader";
export interface IEmitterRate extends IOptionLoader<IEmitterRate> {
    delay: number;
    quantity: number;
}
