
import { NavLink, useLocation, useParams } from "react-router-dom"
import Back from "./Back"
import Buscador from "./Buscador"

const Nav = () => {
  // const [showBack, setShowBack] = useState(true)
  const location = useLocation()
  const { id } = useParams()


  return (
    <nav className="nav" style={
      {display: 'flex',
      // marginRight: '20px'
      justifyContent:'space-between',
      alignItems: 'center',
      width:'100%'
  }
  }>
     
        <h1><img src={'../../public/img/logo.png'} width={200} alt="logo rick & Morty" /></h1>
     
      <div>

      {location.pathname === `/${id}` ? ( <NavLink to={'/'}> <Back />  </NavLink>) :
        <Buscador />
        
      }
      
      </div>

    </nav>
  )
}

export default Nav
