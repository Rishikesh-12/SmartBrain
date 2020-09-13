import { Particle } from "../../../Particle";
import type { Container } from "../../../Container";
export declare class Collider {
    static collide(p1: Particle, container: Container, _delta: number): void;
    private static getRadius;
    private static resolveCollision;
    private static rotate;
}
