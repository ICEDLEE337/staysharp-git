export interface IOneRepoOp {
    repoOne: IRepo;
}
export interface IRepo {
    name: string;
    url?: string;
    branches?: string[];
}
export interface ITwoRepoOp extends IOneRepoOp {
    repoTwo: IRepo;
}
export interface ICodeSample {
    example: string;
    template: string;
    caption?: string;
    output?: string;
}

export interface ISlide {
    title: string;
    subTitle?: string;
    bulletedList?: ISlide[];
    icon?: string;
    heroImg?: string;
    heroText?: string;
    details?: ISlide[];
    codeSamples?: ICodeSample[]
}

