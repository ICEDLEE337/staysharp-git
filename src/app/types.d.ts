import {SlideTypes} from "./all-slides";

export interface ISlide {
    title: string;
    type: SlideTypes;
    subTitle?: string;
    bulletedList?: ISlide[];
    icon: string;
}

