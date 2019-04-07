import {ISlide} from "../types";
import * as _ from 'lodash';

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
        title: 'Theory and Concepts',
        subTitle: 'Short and Simple',
        icon: 'code',
        bulletedList: theorySlides
    },
    {
        title: 'Commands',
        subTitle: 'All examples syntactically valid on OSX',
        icon: 'videogame_asset',
        bulletedList: [
            {
                title: 'clone',
                icon: 'cloud_download',
                subTitle: 'If you\'re not starting a new repository, this is how you can create a local copy of the code and history from another git repository.',
                codeSamples: [
                    {
                        template: 'git clone <url>',
                        example: 'git clone https://github.com/angular/material2.git',
                        output: `Cloning into 'material2'...
remote: Enumerating objects: 69104, done.
remote: Total 69104 (delta 0), reused 0 (delta 0), pack-reused 69104
Receiving objects: 100% (69104/69104), 23.47 MiB | 3.05 MiB/s, done.
Resolving deltas: 100% (52561/52561), done.`,
                    }
                ]
            },
            {
                title: 'status',
                icon: 'watch',
                subTitle: 'Let\'s you know vital info like current revision and whether any files have unsaved (uncommitted) changes.',
                codeSamples: [
                    {
                        template: 'git status',
                        example: 'git status',
                        output: `output goes here`,
                    }
                ]
            },
            {
                title: 'fetch',
                icon: 'info',
                subTitle: 'Retrieves new revisions that have been added to the remote repository.',
                codeSamples: [
                    {
                        template: 'git fetch',
                        example: 'git fetch',
                        output: `remote: Enumerating objects: 17, done.
remote: Counting objects: 100% (17/17), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 17 (delta 9), reused 16 (delta 9), pack-reused 0
Unpacking objects: 100% (17/17), done.
From https://github.com/angular/material2
    2f009d00d..c3ead653d  master     -> origin/master`,
                    }
                ]
            },
            {
                title: 'diff',
                icon: 'shuffle',
                subTitle: 'Compares two revisions and shows differences between files as well as files that have been added or deleted.',
                codeSamples: [
                    {
                        template: 'git diff',
                        example: 'git diff develop feature_branch_123',
                        output: ``,
                    }
                ]
            }
        ]

    }
];

// slides[0].bulletedList = _(slides).slice(1).value();
export default slides;
