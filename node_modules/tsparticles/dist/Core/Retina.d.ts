import type { Container } from "./Container";
import type { Particle } from "./Particle";
export declare class Retina {
    isRetina: boolean;
    bubbleModeDistance: number;
    bubbleModeSize: number;
    connectModeDistance: number;
    connectModeRadius: number;
    grabModeDistance: number;
    repulseModeDistance: number;
    slowModeRadius: number;
    lineLinkedDistance: number;
    lineLinkedWidth: number;
    moveSpeed: number;
    sizeValue: number;
    sizeAnimationSpeed: number;
    polygonMaskMoveRadius: number;
    pixelRatio: number;
    private readonly container;
    constructor(container: Container);
    init(): void;
    initParticle(particle: Particle): void;
    reset(): void;
}
