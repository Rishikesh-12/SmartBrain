import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { Particle } from "../Core/Particle";
export declare class Point {
    readonly position: ICoordinates;
    readonly particle: Particle;
    constructor(x: number, y: number, particle: Particle);
}
