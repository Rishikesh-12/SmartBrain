import type { Container } from "./Core/Container";
import type { IOptions } from "./Options/Interfaces/IOptions";
import type { RecursivePartial } from "./Types/RecursivePartial";
import type { IShapeDrawer } from "./Core/Interfaces/IShapeDrawer";
import type { ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction } from "./Types/ShapeDrawerFunctions";
import type { IPlugin } from "./Core/Interfaces/IPlugin";
declare global {
    interface Window {
        customRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        customCancelRequestAnimationFrame: (handle: number) => void;
        webkitCancelRequestAnimationFrame: (handle: number) => void;
        mozCancelRequestAnimationFrame: (handle: number) => void;
        oCancelRequestAnimationFrame: (handle: number) => void;
        msCancelRequestAnimationFrame: (handle: number) => void;
    }
}
declare class Main {
    private initialized;
    constructor();
    init(): void;
    loadFromArray(tagId: string, params: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    load(tagId: string, params: RecursivePartial<IOptions>): Promise<Container | undefined>;
    loadJSON(tagId: string, pathConfigJson: string): Promise<Container | undefined>;
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
    dom(): Container[];
    domItem(index: number): Container | undefined;
    addShape(shape: string, drawer: IShapeDrawer | ShapeDrawerDrawFunction, init?: ShapeDrawerInitFunction, afterEffect?: ShapeDrawerAfterEffectFunction, destroy?: ShapeDrawerDestroyFunction): void;
    addPreset(preset: string, options: RecursivePartial<IOptions>): void;
    addPlugin(plugin: IPlugin): void;
}
declare const tsParticles: Main;
declare const particlesJS: any;
declare const pJSDom: Container[];
export { tsParticles, particlesJS, pJSDom };
