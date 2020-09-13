import type { Container } from "../../../Container";
import type { IParticle } from "../../../Interfaces/IParticle";
export declare class Bubbler {
    static reset(particle: IParticle): void;
    static bubble(container: Container, _delta: number): void;
    private static process;
    private static clickBubble;
    private static hoverBubble;
    private static hoverBubbleSize;
    private static hoverBubbleOpacity;
    private static calculateBubbleValue;
    private static hoverBubbleColor;
}
