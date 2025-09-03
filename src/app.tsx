import { generateImage } from "./api/ApiManager";
import { InputsContainer } from "./components/InputsContainer";

export function App() {
  function handlerGenerateImage(prompt: string, options?: GenerateImageParams) {
      generateImage(prompt, options)
  }

  return (
     <InputsContainer onGenerate={handlerGenerateImage}/>
  )
}
