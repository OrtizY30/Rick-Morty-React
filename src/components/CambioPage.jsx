

import { useContext } from 'react'
import { ApiRick } from '../context/ApiContext'
import Nav from './Nav'


const CambioPage = () => {
  // const [page, setPage] = useState(1)
    const { next, prev, numberPage } = useContext(ApiRick)
   const mas = () => {
      next()
      console.log(numberPage)
     
   }
   const menos = () => {
      prev()
      console.log(numberPage)
   }
  return (
    <div id='box_page'>
        <a href={'#header'}>
      <div className='page' onClick={menos}  >
        <img src={'../../public/img/prev.svg'}  alt="" />
      </div>
        </a>
     
      <div className='page' onClick={mas}   >
      <img src={'../../public/img/next.svg'}  alt="" />
      </div>
    </div>
  )
}

export default CambioPage
