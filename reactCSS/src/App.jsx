
// css inline, module, external
// by creating module we create folder name button then insert our button.jsx file then add Buttom.module.css
import Button from "./Button/Button"
import ButtonInlline from "./Button-inline-css"

function App() {
   
  return(
    <>
    <Button/>
    <ButtonInlline/>
     
    </>
    
  )

}

export default App
