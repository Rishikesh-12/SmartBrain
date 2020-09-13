import type { IOptionLoader } from "../../IOptionLoader";
export interface IRemove extends IOptionLoader<IRemove> {
    particles_nb: number;
    quantity: number;
}
