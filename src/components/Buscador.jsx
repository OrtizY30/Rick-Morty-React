import { useContext} from "react"
import {  ApiRick } from "../context/ApiContext"


const Buscador = () => {
 const {  setBusquedaParam } = useContext(ApiRick)
 const BuscarPersonaje = ({target: {value}}) =>{
    setBusquedaParam(value)
 }

  return (
    <>
      <input type="text" 
      id='Search' 
      name="busqueda"
      autoComplete="off"
      placeholder='Search character'
      onChange={BuscarPersonaje} />
    </>
  )
}

export default Buscador
