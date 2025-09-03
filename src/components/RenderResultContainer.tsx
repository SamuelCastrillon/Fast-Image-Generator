import type { FC } from "preact/compat"

interface RenderResultContainerProps {
    imagesGenerated: string[];
    clearImages: () => void;
}

export const RenderResultContainer: FC<RenderResultContainerProps> = (props) => {
    const { imagesGenerated, clearImages } = props;
    return (
        <div id="result-container" class="relative flex w-full h-fit p-4 bg-white flex-wrap justify-between">
            {imagesGenerated.map((url) => (
                <img key={url} src={url} class="mb-4 rounded shadow-lg h-100 w-100" />
            ))}
            {imagesGenerated.length > 0 && (
                <button class="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600" onClick={clearImages}>Clear Images</button>
            )}
        </div>
    )
}