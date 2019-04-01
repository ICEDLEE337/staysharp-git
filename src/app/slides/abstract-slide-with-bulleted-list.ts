import {AbstractSlide} from "./abstract-slide";
import {Route} from "@angular/compiler/src/core";

export abstract class AbstractSlideWithBulletedList extends AbstractSlide {
    abstract getList (): Route[];
}