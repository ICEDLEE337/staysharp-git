import {AbstractSlide} from "./abstract-slide";

export abstract class AbstractSlideWithText extends AbstractSlide {
    abstract getTitle (): string;
    abstract getTitleImg (): string;
    abstract getText(): string;
}