import {ISlide} from "./types";
import * as _ from 'lodash';

export const SlideTypes = {
    TITLE_SLIDE: 'h1',
    LIST_SLIDE: 'ul',
    IMAGE_SLIDE: 'img',
    TEXT_SLIDE: 'text'
};

const theorySlides: ISlide[] = [
    {
        title: 'Hashing',
        icon: 'fingerprint',
        type: SlideTypes.LIST_SLIDE,
        bulletedList: [
            {title: 'Git uses a hashing algorithm to represent the state of the file system', type: SlideTypes.LIST_SLIDE}
        ]
    },
    {
        title: 'Linking',
        icon: 'link',
        type: SlideTypes.LIST_SLIDE,
        bulletedList: [
            {title: 'Git links hashes together (normalization)', type: SlideTypes.LIST_SLIDE}
        ]
    }
];

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
        // heroImg: 'https://angular.io/assets/images/logos/angular/angular.svg',
        // heroText: 'Big A poppin erywhere up in heeeeeeeyaaaa'
        bulletedList: theorySlides

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
