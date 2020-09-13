import type { IDimension } from "../Core/Interfaces/IDimension";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IRgb } from "../Core/Interfaces/IRgb";
import type { ILineLinkedShadow } from "../Options/Interfaces/Particles/LineLinked/ILineLinkedShadow";
import type { IParticle } from "../Core/Interfaces/IParticle";
import type { IShadow } from "../Options/Interfaces/Particles/IShadow";
import type { Container } from "../Core/Container";
import type { IContainerPlugin } from "../Core/Interfaces/IContainerPlugin";
export declare class CanvasUtils {
    static paintBase(context: CanvasRenderingContext2D, dimension: IDimension, baseColor?: string): void;
    static clear(context: CanvasRenderingContext2D, dimension: IDimension): void;
    static drawLinkedLine(context: CanvasRenderingContext2D, width: number, begin: ICoordinates, end: ICoordinates, backgroundMask: boolean, colorLine: IRgb, opacity: number, shadow: ILineLinkedShadow): void;
    static drawConnectLine(context: CanvasRenderingContext2D, width: number, lineStyle: CanvasGradient, begin: ICoordinates, end: ICoordinates): void;
    static gradient(context: CanvasRenderingContext2D, p1: IParticle, p2: IParticle, opacity: number): CanvasGradient | undefined;
    static drawGrabLine(context: CanvasRenderingContext2D, width: number, begin: ICoordinates, end: ICoordinates, colorLine: IRgb, opacity: number): void;
    static drawParticle(container: Container, context: CanvasRenderingContext2D, particle: IParticle, delta: number, colorValue: string, backgroundMask: boolean, radius: number, opacity: number, shadow: IShadow): void;
    static drawShape(container: Container, context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: number): void;
    static drawShapeAfterEffect(container: Container, context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: number): void;
    static drawPlugin(context: CanvasRenderingContext2D, plugin: IContainerPlugin, delta: number): void;
}
