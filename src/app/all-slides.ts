import {ISlide} from "./types";
import * as _ from 'lodash';

export const enum SlideTypes {
    TITLE_SLIDE,
    LIST_SLIDE,
    IMAGE_SLIDE,
    FOLDABLE_LIST_SLIDE
}

const slides: ISlide[] = [
    {
        title: 'Table of Contents',
        subTitle: '',
        type: SlideTypes.LIST_SLIDE,
        icon: 'gps_fixed',
    },
    {
        title: 'Theory and Concepts',
        subTitle: 'Short and Simple',
        type: SlideTypes.LIST_SLIDE,
        icon: 'code',

    },
    {
        title: 'Mechanics and Manuevers',
        subTitle: 'Commands and examples',
        type: SlideTypes.LIST_SLIDE,
        icon: 'videogame_asset',

    }
];

slides[0].bulletedList = _(slides).slice(1).value();
export default slides;
