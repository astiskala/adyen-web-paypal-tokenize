export interface ImageOptions {
    extension?: string;
    imageFolder?: string;
    loadingContext?: string;
    name?: string;
    parentFolder?: string;
    size?: string;
    subFolder?: string;
    svgOptions?: string;
    type?: string;
}
export declare const getImageUrl: ({ loadingContext, extension, ...options }: ImageOptions) => Function;
export default getImageUrl;
