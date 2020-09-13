import type { ICoordinates } from "../../Core/Interfaces/ICoordinates";
import type { IEmitter } from "../../Options/Interfaces/Emitters/IEmitter";
import { EmitterSize } from "../../Options/Classes/Emitters/EmitterSize";
import type { Emitters } from "./Emitters";
export declare class Emitter {
    position: ICoordinates;
    size: EmitterSize;
    emitterOptions: IEmitter;
    private readonly emitters;
    private readonly container;
    private readonly initialPosition?;
    private readonly particlesOptions;
    private startInterval?;
    private lifeCount;
    constructor(emitters: Emitters, emitterOptions: IEmitter, position?: ICoordinates);
    play(): void;
    pause(): void;
    resize(): void;
    private prepareToDie;
    private destroy;
    private calcPosition;
    private emit;
}
