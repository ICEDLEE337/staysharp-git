import {AbstractSlide} from "./abstract-slide";
import {Route} from "@angular/compiler/src/core";

export abstract class AbstractSlideWithOrderedList extends AbstractSlide {
    abstract getOrderedList (): string[];
}