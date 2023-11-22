import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personaje from "./components/Personaje"



function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/:id" element={<Personaje/>}></Route>
        
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
