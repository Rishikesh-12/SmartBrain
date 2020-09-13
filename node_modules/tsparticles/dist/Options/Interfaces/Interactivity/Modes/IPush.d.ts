import type { IOptionLoader } from "../../IOptionLoader";
export interface IPush extends IOptionLoader<IPush> {
    particles_nb: number;
    quantity: number;
}
