import type { IShapeDrawer } from "../../Interfaces/IShapeDrawer";
import type { ISide } from "../../Interfaces/ISide";
import type { ICoordinates } from "../../Interfaces/ICoordinates";
import type { IParticle } from "../../Interfaces/IParticle";
export declare abstract class PolygonDrawerBase implements IShapeDrawer {
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number, _opacity: number): void;
    abstract getSidesData(particle: IParticle, radius: number): ISide;
    abstract getCenter(particle: IParticle, radius: number): ICoordinates;
}
