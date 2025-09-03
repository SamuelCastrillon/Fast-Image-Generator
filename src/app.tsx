import { generateImage } from "./api/ApiManager";
import { InputsContainer } from "./components/InputsContainer";
import { RenderResultContainer } from "./components/RenderResultContainer";

export function App() {
  const imagesGenerated: string[] = [];

  function handlerGenerateImage(prompt: string, options?: GenerateImageParams) {
      generateImage(prompt, options).then((responce) => {
        imagesGenerated.push(responce.url); 
        console.log(responce)   
  })}

  return (
    <main>
      <InputsContainer onGenerate={handlerGenerateImage}/>
      <RenderResultContainer imagesGenerated={imagesGenerated} />
    </main>
     
  )
}
