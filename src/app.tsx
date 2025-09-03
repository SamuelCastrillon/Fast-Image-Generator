import { useState } from "preact/hooks";
import { generateImage } from "./api/ApiManager";
import { InputsContainer } from "./components/InputsContainer";
import { RenderResultContainer } from "./components/RenderResultContainer";

export function App() {
  const [imagesGenerated, setImagesGenerated] = useState<string[]>([]);

  function handlerGenerateImage(prompt: string, options?: GenerateImageParams) {
      generateImage(prompt, options).then((responce) => {
        setImagesGenerated((prev) => [...prev, responce.url]);
  })}
  
  return (
    <main>
      <InputsContainer onGenerate={handlerGenerateImage}/>
      <RenderResultContainer imagesGenerated={imagesGenerated} />
    </main>
     
  )
}
