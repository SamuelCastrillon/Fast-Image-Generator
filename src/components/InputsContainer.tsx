import { useEffect, useState, type FC } from "preact/compat";
import { getModels } from "../api/ApiManager";

export const InputsContainer: FC<{ onGenerate: (prompt: string, options?: GenerateImageParams) => void }> = ({ onGenerate }) => {
    const [models, setModels] = useState<string[]>([]);


    useEffect(() => {
        getModels().then((models) => {
            setModels(models);
        }
        )
    }, [])

    return (
        <header class="stiky p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 class="text-2xl font-bold text-center">Image Generator</h2>
            <form class="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const prompt = formData.get('prompt') as string;
                const options: GenerateImageParams = { model: formData.get('model') as string, width: 720, height: 720, nofeed: true, nologo: true, safe: false };

                // console.log(prompt, options);
                onGenerate(prompt, options);
            }}>
                <div>
                    <label for="prompt" class="block text-sm font-medium text-gray-700">Prompt</label>
                    <input type="text" id="prompt" name="prompt" class="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="A sunset over a mountain range" />
                </div>
                <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" type='submit'>Generate Image</button>
                <select name="model" class="w-full border border-gray-300 rounded-md p-2">
                    {models.map((model, index) => (
                        <option value={model} key={model + index}>{model}</option>
                    ))}
                </select>
            </form>
        </header >)
}