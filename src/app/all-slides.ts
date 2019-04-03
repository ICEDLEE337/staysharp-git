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
            {
                title: 'clone',
                icon: 'cloud_download',
                subTitle: 'If you\'re not creating the repository yourself, this is where it all begins.',
                codeSamples: [
                    {
                        template: 'git clone <url>',
                        example: 'git clone https://github.com/angular/material2.git',
                        output: `Cloning into 'material2'...
remote: Enumerating objects: 69104, done.
remote: Total 69104 (delta 0), reused 0 (delta 0), pack-reused 69104
Receiving objects: 100% (69104/69104), 23.47 MiB | 3.05 MiB/s, done.
Resolving deltas: 100% (52561/52561), done.`,
                        caption: 'Retrieves the code from the specified url. Along with the code, git retrieves a complete history of all the changes.'
                    }
                ]
            }
        ]

    }
];

slides[0].bulletedList = _(slides).slice(1).value();
export default slides;
