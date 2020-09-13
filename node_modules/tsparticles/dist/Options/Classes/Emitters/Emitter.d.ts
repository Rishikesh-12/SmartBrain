import type { IEmitter } from "../../Interfaces/Emitters/IEmitter";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import { MoveDirection } from "../../../Enums/MoveDirection";
import type { IParticles } from "../../Interfaces/Particles/IParticles";
import { EmitterRate } from "./EmitterRate";
import { EmitterLife } from "./EmitterLife";
import { EmitterSize } from "./EmitterSize";
export declare class Emitter implements IEmitter {
    size?: EmitterSize;
    direction: MoveDirection;
    life: EmitterLife;
    particles?: RecursivePartial<IParticles>;
    position?: ICoordinates;
    rate: EmitterRate;
    constructor();
    load(data?: RecursivePartial<IEmitter>): void;
}
