import type { IModes } from "../../../Interfaces/Interactivity/Modes/IModes";
import { Bubble } from "./Bubble";
import { Connect } from "./Connect";
import { Grab } from "./Grab";
import { Remove } from "./Remove";
import { Push } from "./Push";
import { Repulse } from "./Repulse";
import { Slow } from "./Slow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import { Emitter } from "../../Emitters/Emitter";
import { Absorber } from "../../Absorbers/Absorber";
export declare class Modes implements IModes {
    absorbers: SingleOrMultiple<Absorber>;
    bubble: Bubble;
    connect: Connect;
    emitters: SingleOrMultiple<Emitter>;
    grab: Grab;
    push: Push;
    remove: Remove;
    repulse: Repulse;
    slow: Slow;
    constructor();
    load(data?: RecursivePartial<IModes>): void;
}
