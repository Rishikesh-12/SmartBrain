import type { IColor } from "../Core/Interfaces/IColor";
import type { IRgb } from "../Core/Interfaces/IRgb";
import type { IRgba } from "../Core/Interfaces/IRgba";
import type { IHsl } from "../Core/Interfaces/IHsl";
import type { IHsla } from "../Core/Interfaces/IHsla";
export declare class ColorUtils {
    static colorToRgb(color: IColor): IRgb | undefined;
    static stringToAlpha(input: string): number | undefined;
    static stringToRgb(input: string): IRgb | undefined;
    static hslToRgb(hsl: IHsl): IRgb;
    static hslaToRgba(hsla: IHsla): IRgba;
    static getRandomRgbColor(min?: number): IRgb;
    static getStyleFromColor(color: IRgb, opacity?: number): string;
    static mix(color1: IRgb, color2: IRgb, size1: number, size2: number): IRgb;
    private static hue2rgb;
    private static stringToRgba;
}
