import { Container } from "./Container";
import type { IOptions } from "../Options/Interfaces/IOptions";
import type { RecursivePartial } from "../Types/RecursivePartial";
export declare class Loader {
    static dom(): Container[];
    static domItem(index: number): Container | undefined;
    static loadFromArray(tagId: string, params: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    static setFromArray(id: string, domContainer: HTMLElement, params: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    static load(tagId: string, params?: RecursivePartial<IOptions>): Promise<Container | undefined>;
    static set(id: string, domContainer: HTMLElement, params?: RecursivePartial<IOptions>): Promise<Container | undefined>;
    static loadJSON(tagId: string, jsonUrl: string): Promise<Container | undefined>;
    static setJSON(id: string, domContainer: HTMLElement, jsonUrl: string): Promise<Container | undefined>;
    static setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
}
