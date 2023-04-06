declare global {
    interface Console {
        image(url: string, params: {
            width?: number;
        }): void;
    }
}
declare function consoleImage(url: string, params?: {
    width?: number;
}): Promise<void>;
export default consoleImage;
