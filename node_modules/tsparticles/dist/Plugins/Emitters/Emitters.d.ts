import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { Emitter } from "./Emitter";
import type { Container } from "../../Core/Container";
import { ClickMode } from "../../Enums/Modes/ClickMode";
export declare class Emitters implements IContainerPlugin {
    readonly container: Container;
    array: Emitter[];
    constructor(container: Container);
    init(): void;
    play(): void;
    pause(): void;
    stop(): void;
    handleClickMode(mode: ClickMode | string): void;
    resize(): void;
    addEmitter(emitter: Emitter): void;
    removeEmitter(emitter: Emitter): void;
}
