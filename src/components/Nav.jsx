
import { NavLink, useLocation, useParams } from "react-router-dom"
import Back from "./Back"
import Buscador from "./Buscador"
import logo from '/img/logo.png';
import MenuHam from "./MenuHam";

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
        <div className="logoImg">

        <img  src={logo} width={200} alt="logo rick & Morty" />
        </div>
        <div className="menuDes" >
          { location.pathname === `/${id}` ? <img  src={logo} width={200} alt="logo rick & Morty" /> : <MenuHam/> }
          
        </div>
      <div>

      {location.pathname === `/${id}` ? ( <NavLink to={'/'}> <Back />  </NavLink>) :
        <Buscador />
        
      }
      
      </div>

    </nav>
  )
}

export default Nav
