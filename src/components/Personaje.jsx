import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import RickApi from '../api/api'

const Personaje = () => {

    const { id } = useParams()
    const [dataPersonaje, setDataPersonaje] = useState([])
    const [spiner, setSpiner] = useState(false)
    const showSpinner = ( ) => {
        setTimeout(() => {
            setSpiner(true)
        }, 3000)
       
    }

    useEffect(() => {
        const GetData = async () => {
            const informacionApi = await RickApi.get(`/${id}`);
            const { data } = informacionApi
            setDataPersonaje(data)
        }
        GetData()
        showSpinner()
    }, [])
    console.log(dataPersonaje)
    const { name, image, status, gender, species, origin, location, episode } = dataPersonaje
    
    return (
        <div className='general'>
        <header className='header'>
        
       <Nav /> 
       
        </header>
            <div className='container-personaje'>
                
                {dataPersonaje.name && spiner ? (
                    <>
                    
                        <div className='container-card'>
                            <div className='img'>
                                
                            <img src={image} alt={name} className={`${status === 'Alive' ? 'verde' : 'red'}`} />
                            </div>
                            <div className='info'>
                                <h2>{name}</h2>
                                <p><strong>Gender: </strong>{gender}</p>
                                <p><strong>Specie: </strong>{species}</p>
                                <p><strong>Origin: </strong>{origin.name}</p>
                                <p><strong>Location: </strong>{location.name}</p>
                                <p><strong>Espisode: </strong>{episode.length}</p>
                                <p><strong>Status: </strong>{status}</p>

                            </div>
                        </div>
                    </>
                ) :
                    <>
                    <h1 className='cargando'>Cargando...</h1>
                    </>
                }
            </div>
        </div>

    )
}

export default Personaje