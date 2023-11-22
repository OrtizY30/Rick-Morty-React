import React, { useContext } from 'react'

import { ApiRick } from '../context/ApiContext'


const Lateral = () => {
    const {GetData,
        setGenderParam,
        setStatusParam,
        setSpecieParam} = useContext(ApiRick)

        const buscarGender = (gender) => {
            setGenderParam(gender)
            GetData();
        }
        const buscarStatus = (status) => {
            setStatusParam(status)
            GetData();
        }
        const buscarSpecie = (specie) => {
            setSpecieParam(specie)
            GetData();
        }
    return (
        <aside className='aside'
        style={{
            // borderLeft: '3px solid #ccc',
            padding: '10px',
            // height: '100%', background: '#eee'
        }}>
            <div className='box-aside' style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <div className='option-aside'>
                    <h2>GENDER</h2>

                    <select name="gender" id="gender" onChange={({target: {value}}) => buscarGender(value)}>
                        <option value="">...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>

                    </select>
                </div>

                <div className='option-aside'>
                    <h2>STATUS</h2>

                    <select name="status" id="status" onChange={({target: {value}}) => buscarStatus(value)}>
                        <option value="">...</option>
                        <option value="Alive">Alive</option>
                        <option value="Death">Death</option>
                    </select>
                </div>

                <div className='option-aside'>
                    <h2>SPECIES</h2>

                    <select name="species" id="species" onChange={({target: {value}}) => buscarSpecie(value)}>
                        <option value="">...</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                        <option value="Humanoid">Humanoid</option>
                        <option value="Robot">Robot</option>
                        <option value="Cronenberg">Cronenberg</option>
                        <option value="Mythological">Mythological Creature</option>
                        <option value="Disease">Disease</option>
                        <option value="Poopybutthole">Poopybutthole</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

            </div>

        </aside>
    )
}

export default Lateral