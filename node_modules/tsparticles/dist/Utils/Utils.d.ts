import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { ICharacterShape } from "../Options/Interfaces/Particles/Shape/ICharacterShape";
import type { IBounds } from "../Core/Interfaces/IBounds";
import type { IDimension } from "../Core/Interfaces/IDimension";
import type { IImage } from "../Core/Interfaces/IImage";
import type { IParticle } from "../Core/Interfaces/IParticle";
import { IRgb } from "../Core/Interfaces/IRgb";
declare type CSSOMString = string;
declare type FontFaceLoadStatus = "unloaded" | "loading" | "loaded" | "error";
declare type FontFaceSetStatus = "loading" | "loaded";
interface FontFace {
    family: CSSOMString;
    style: CSSOMString;
    weight: CSSOMString;
    stretch: CSSOMString;
    unicodeRange: CSSOMString;
    variant: CSSOMString;
    featureSettings: CSSOMString;
    variationSettings: CSSOMString;
    display: CSSOMString;
    readonly status: FontFaceLoadStatus;
    readonly loaded: Promise<FontFace>;
    load(): Promise<FontFace>;
}
interface FontFaceSet {
    readonly status: FontFaceSetStatus;
    readonly ready: Promise<FontFaceSet>;
    check(font: string, text?: string): Boolean;
    load(font: string, text?: string): Promise<FontFace[]>;
}
declare global {
    interface Document {
        fonts: FontFaceSet;
    }
}
export declare class Utils {
    static replaceColorSvg(image: IImage, color: IRgb, opacity: number): string;
    static clamp(num: number, min: number, max: number): number;
    static isInArray<T>(value: T, array: T[] | T): boolean;
    static mix(comp1: number, comp2: number, weight1: number, weight2: number): number;
    static getParticleBaseVelocity(particle: IParticle): ICoordinates;
    static getDistance(pointA: ICoordinates, pointB: ICoordinates): number;
    static loadFont(character: ICharacterShape): Promise<void>;
    static arrayRandomIndex<T>(array: T[]): number;
    static itemFromArray<T>(array: T[], index?: number): T;
    static randomInRange(min: number, max: number): number;
    static isPointInside(point: ICoordinates, size: IDimension, radius?: number): boolean;
    static areBoundsInside(bounds: IBounds, size: IDimension): boolean;
    static calculateBounds(point: ICoordinates, radius: number): IBounds;
    static loadImage(source: string): Promise<IImage>;
    static downloadSvgImage(source: string): Promise<IImage>;
    static deepExtend(destination: any, source: any): any;
}
export {};
