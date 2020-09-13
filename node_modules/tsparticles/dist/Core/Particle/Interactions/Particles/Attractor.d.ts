import type { IParticle } from "../../../Interfaces/IParticle";
import type { Container } from "../../../Container";
export declare class Attractor {
    static attract(p1: IParticle, container: Container, _delta: number): void;
}
