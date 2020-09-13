import { Container } from "./Container";
import type { IMouseData } from "./Interfaces/IMouseData";
import type { IRgb } from "./Interfaces/IRgb";
import { Particle } from "./Particle";
import { QuadTree } from "../Utils/QuadTree";
export declare class Particles {
    get count(): number;
    array: Particle[];
    quadTree: QuadTree;
    pushing?: boolean;
    lineLinkedColor?: IRgb | string;
    grabLineColor?: IRgb | string;
    noiseZ: number;
    private readonly container;
    private interactionsEnabled;
    constructor(container: Container);
    init(): void;
    redraw(): void;
    removeAt(index: number, quantity?: number): void;
    remove(particle: Particle): void;
    update(delta: number): void;
    draw(delta: number): void;
    clear(): void;
    push(nb: number, mousePosition?: IMouseData): void;
    addParticle(particle: Particle): void;
    removeQuantity(quantity: number): void;
}
