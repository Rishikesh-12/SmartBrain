import type { IInteractivity } from "./Interactivity/IInteractivity";
import type { IParticles } from "./Particles/IParticles";
import type { IPolygonMask } from "./PolygonMask/IPolygonMask";
import type { IOptionLoader } from "./IOptionLoader";
import type { IBackgroundMask } from "./BackgroundMask/IBackgroundMask";
import type { IBackground } from "./Background/IBackground";
import type { SingleOrMultiple } from "../../Types/SingleOrMultiple";
import type { IEmitter } from "./Emitters/IEmitter";
import type { IAbsorber } from "./Absorbers/IAbsorber";
import { IInfection } from "./Infection/IInfection";
export interface IOptions extends IOptionLoader<IOptions> {
    absorbers: SingleOrMultiple<IAbsorber>;
    background: IBackground;
    backgroundMask: IBackgroundMask;
    detectRetina: boolean;
    emitters: SingleOrMultiple<IEmitter>;
    fps_limit: number;
    fpsLimit: number;
    infection: IInfection;
    interactivity: IInteractivity;
    particles: IParticles;
    pauseOnBlur: boolean;
    polygon: IPolygonMask;
    preset?: string | string[];
    retina_detect: boolean;
}
