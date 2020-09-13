import type { IOptionLoader } from "../IOptionLoader";
import type { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import type { MoveDirection } from "../../../Enums/MoveDirection";
import type { IParticles } from "../Particles/IParticles";
import type { IEmitterRate } from "./IEmitterRate";
import type { IEmitterLife } from "./IEmitterLife";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IEmitterSize } from "./IEmitterSize";
export interface IEmitter extends IOptionLoader<IEmitter> {
    size?: IEmitterSize;
    direction: MoveDirection;
    life: IEmitterLife;
    particles?: RecursivePartial<IParticles>;
    position?: ICoordinates;
    rate: IEmitterRate;
}
