import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IShapeValues } from "../../../Interfaces/Particles/Shape/IShapeValues";
import { IParticles } from "../../../Interfaces/Particles/IParticles";
export declare class ShapeBase implements IShapeValues {
    close?: boolean;
    fill?: boolean;
    particles?: RecursivePartial<IParticles>;
    constructor();
    load(data?: RecursivePartial<IShapeValues>): void;
}
