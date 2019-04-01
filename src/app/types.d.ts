import {SlideTypes} from "./all-slides";

export interface ISlide {
    title: string;
    type: string;
    subTitle?: string;
    bulletedList?: ISlide[];
    icon?: string;
    heroImg?: string;
    heroText?: string;
}

