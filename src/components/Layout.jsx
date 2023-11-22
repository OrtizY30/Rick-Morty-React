import { useContext, useState } from 'react'
import '../App.css'
import Card from './Card'
import Nav from './Nav'
import CambioPage from './CambioPage'
import { ApiRick } from '../context/ApiContext'
import Lateral from './Lateral'
import logoRick from '/img/rickmorty.png'
const Layout = () => {

    const { data } = useContext(ApiRick)
    const [active, setActive] = useState(true)
    return (
        <div className='container'>
            <header id='header'>
                <Nav />

                <div >
                {/* <Buscador/> */}
                <div className='modo' onClick={() => setActive(!active)}>
                    <strong>MODO</strong>
                </div>
                </div>

            </header>
            
            <div className='subContainer'>
                <Lateral/>

                {data.map(item => (

                    <Card  key={item.id} imagen={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} active={active} id={item.id} />
                ))}
            </div>
            <CambioPage/>
            <div className='footer'>
            <h1><img src={logoRick} width={250} alt="logo rick & Morty" /></h1>
           
            </div>
        </div>
    )
}

export default Layout