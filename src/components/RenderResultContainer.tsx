import type { FC } from "preact/compat"

export const RenderResultContainer: FC<{imagesGenerated: string[]}> = ({imagesGenerated}) => {
    return (
        <div id="result-container" class="mt-4">
            {imagesGenerated.map((url) => (
                <img key={url} src={url} class="mb-4 rounded shadow-lg" />
            ))}
        </div>
    )
}