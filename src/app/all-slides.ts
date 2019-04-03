import {ISlide} from "./types";
import * as _ from 'lodash';

// export const SlideTypes = {
//     TITLE_SLIDE: 'h1',
//     LIST_SLIDE: 'ul',
//     IMAGE_SLIDE: 'img',
//     TEXT_SLIDE: 'text'
// };

const theorySlides: ISlide[] = [
    {
        title: 'Hashing',
        icon: 'fingerprint',
        bulletedList: [
            {title: 'Git uses a hashing algorithm to represent the state of the file system'}
        ]
    },
    {
        title: 'Linking',
        icon: 'link',
        bulletedList: [
            {title: 'Git links hashes together (normalization)'}
        ]
    }
];

const slides: ISlide[] = [
    {
        title: 'Table of Contents',
        subTitle: '',
        icon: 'gps_fixed',
    },
    {
        title: 'Theory and Concepts',
        subTitle: 'Short and Simple',
        icon: 'code',
        bulletedList: theorySlides

    },
    {
        title: 'Mechanics and Manuevers',
        subTitle: 'Commands and examples',
        icon: 'videogame_asset',
        bulletedList: [
            {title: 'clone', }
        ]

    }
];

slides[0].bulletedList = _(slides).slice(1).value();
export default slides;
