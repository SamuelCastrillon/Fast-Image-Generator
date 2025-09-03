import type { FC } from "preact/compat"

export const RenderResultContainer: FC<{imagesGenerated: string[]}> = ({imagesGenerated}) => {
    return (
        <div id="result-container" class="flex gap-4 mt-4 p-4 bg-white rounded shadow-md h-fit overflow-y-auto">
            {imagesGenerated.map((url) => (
                <img key={url} src={url} class="mb-4 rounded shadow-lg h-100 w-100" />
            ))}
        </div>
    )
}