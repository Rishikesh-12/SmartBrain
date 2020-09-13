export declare class SimplexNoise {
    private readonly p;
    private readonly perm;
    private readonly permMod12;
    constructor(random?: () => number);
    noise3D(xin: number, yin: number, zin: number): number;
}
