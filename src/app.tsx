import { useState } from "preact/hooks";
import { generateImage } from "./api/ApiManager";
import { InputsContainer } from "./components/InputsContainer";
import { RenderResultContainer } from "./components/RenderResultContainer";
// import { UseGeminiBanana } from "./api/GeminyApiIntegration";

export function App() {
  const [imagesGenerated, setImagesGenerated] = useState<string[]>([]);

  function handlerGenerateImage(prompt: string, options?: GenerateImageParams) {
      generateImage(prompt, options).then((responce) => {
        setImagesGenerated((prev) => [...prev, responce.url]);
  })}

  // function handerlUseGeminiBanana(prompt: string) {
  //   UseGeminiBanana({prompt}).then((responce) => {
  //     console.log(responce);
  //   })
  // }

  function clearImages() {
    setImagesGenerated([]);
  }
  
  return (
    <div class='relative'>
      <InputsContainer onGenerate={handlerGenerateImage}/>
      <RenderResultContainer imagesGenerated={imagesGenerated} clearImages={clearImages} />
    </div>
     
  )
}
