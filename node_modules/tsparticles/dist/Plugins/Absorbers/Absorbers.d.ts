import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { Absorber } from "./Absorber";
import { Container } from "../../Core/Container";
import type { Particle } from "../../Core/Particle";
import { ClickMode } from "../../Enums/Modes/ClickMode";
export declare class Absorbers implements IContainerPlugin {
    readonly container: Container;
    array: Absorber[];
    constructor(container: Container);
    init(): void;
    particleUpdate(particle: Particle, delta: number): void;
    draw(context: CanvasRenderingContext2D): void;
    stop(): void;
    resize(): void;
    handleClickMode(mode: ClickMode | string): void;
    addAbsorber(absorber: Absorber): void;
    removeAbsorber(absorber: Absorber): void;
}
