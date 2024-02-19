/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/scenes/navbar"
import Home from "./scenes/home"
import Aulas from "./scenes/aulas"
import { SelectedPage } from "./shared/types"
import Footer from "./scenes/footer"

function App() {

  return (
    <div className='app bg-beige-10 select-none'>
      <Navbar isTopOfPage={false} selectedPage={SelectedPage.Home} setSelectedPage={function (): void {
        throw new Error("Function not implemented.")
      } }/>
      <Home setSelectedPage={function (): void {
        throw new Error("Function not implemented.")
      } }/>
      <Aulas setSelectedPage={function (): void {
        throw new Error("Function not implemented.")
      } }/>
      <Footer setSelectedPage={function (): void {
        throw new Error("Function not implemented.")
      } } selectedPage={SelectedPage.EntreemContato}></Footer>
    </div>
  )
}

export default App
