/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/scenes/navbar"
import Home from "./scenes/home"
import Aulas from "./scenes/aulas"
import { SelectedPage } from "./shared/types"
import Footer from "./scenes/footer"

function App() {

  return (
    <div className='app bg-beige-10'>
      <Navbar isTopOfPage={false} selectedPage={"c:/Users/higui/Desktop/corpoLuz/corpoDeLuz/src/shared/types".Home} setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function not implemented.")
      } }/>
      <Home setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function not implemented.")
      } }/>
      <Aulas setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function not implemented.")
      } }/>
      <Footer setSelectedPage={function (value: SelectedPage): void {
        throw new Error("Function not implemented.")
      } } selectedPage={"c:/Users/higui/Desktop/corpoLuz/corpoDeLuz/src/shared/types".EntreemContato}></Footer>
    </div>
  )
}

export default App
