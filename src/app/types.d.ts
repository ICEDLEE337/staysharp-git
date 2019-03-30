
export interface ISlide {
    title: string;
    topics?: Array<ITopic>
}

export interface ITopic extends ITitle {
    imgUrl: string;
    text: string;
}

export interface ITitle {
    title: string;
    titleImgUrl?: string;
}
