import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import RickApi from '../api/api'
import useCounter from '../hook/UserCounter'

export const ApiRick = createContext()

export const ApiContext = ({ children }) => {
  
    const [data, setData] = useState([])
    const {next, prev, numberPage} = useCounter()
    const [busqueda, setBusqueda] = useState('') ;
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    // const [spiner, setSpiner] = useState(false)
    // const showSpinner = ( ) => {
    //     setTimeout(() => {
    //         setSpiner(true)
    //     }, 2000)
    // }
   
        useEffect(() => {
            
            GetData(numberPage)
            // showSpinner()
               
        }, [numberPage, busqueda, status, gender, species ])

        const GetData = async (numberPage) => {
            const informacionApi = await RickApi.get(`?page=${numberPage}&name=${busqueda}&status=${status}&gender=${gender}&species=${species}`);
            const { data: { results } } = informacionApi
           // { spiner ?             
                setData(results)      
            // : ( <>
            // <h1 className='cargando'>Cargando...</h1>
            // </>) }
           
        }

       const setBusquedaParam = (value) => {
        setBusqueda(value);
       }
       const setStatusParam = (value) => {
        setStatus(value);
       }
       const setGenderParam = (value) => {
        setGender(value);
       }
       const setSpecieParam = (value) => {
        setSpecies(value);
       }


    return (
        <>
            <ApiRick.Provider value={{ data, setData, GetData, next, prev, setBusquedaParam, setGenderParam, setStatusParam, setSpecieParam}}>
                {children}
            </ApiRick.Provider>
        </>
    )
}




