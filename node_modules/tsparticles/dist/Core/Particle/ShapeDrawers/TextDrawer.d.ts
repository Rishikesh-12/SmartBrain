import type { IShapeDrawer } from "../../Interfaces/IShapeDrawer";
import type { IParticle } from "../../Interfaces/IParticle";
import type { Container } from "../../Container";
export declare class TextDrawer implements IShapeDrawer {
    init(container: Container): Promise<void>;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number, _opacity: number): void;
}
