import { useContext, useState } from "react"
import { ApiRick } from "../context/ApiContext"
// import { ApiRick } from "../context/ApiContext"

 const useCounter = () => {
    // const {page, setPage} = useContext(ApiRick)
     const [numberPage, setNumberPage] = useState(1)
    const [busqueda, setBusqueda] = useState('')
    // const { data } = useContext(ApiRick)

    const personaje = (e) => {
        setBusqueda(e.target.value);
        console.log(busqueda)

        let personaje_econtrados = data.filter(personaje => {
          return personaje.name.toLowerCase().includes(busqueda.toLowerCase())
        });
        console.log(personaje_econtrados)

        // return personaje_econtrados;
   }
     const next = () => {
        if( numberPage >= 1 ){
            setNumberPage(numberPage + 1);
            
            
        } else {
            setNumberPage(1)
        }
     }

     const prev = () => {
        if( numberPage >= 1 ){
            setNumberPage(numberPage - 1)
            
        } else {
            setNumberPage(1)
        }
     }

     return {
        next,
        prev,
        numberPage,
        personaje,
        busqueda
     }
 }

 export default useCounter