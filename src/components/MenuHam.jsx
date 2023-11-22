import React, { useContext, useState } from 'react'
import logo from '/img/logo.png'
import { ApiRick } from '../context/ApiContext'


const MenuHam = () => {
    const [show, setShow] = useState(false)
    const showMenu = () => {
        setShow(!show)
    }

    const { GetData,
        setGenderParam,
        setStatusParam,
        setSpecieParam } = useContext(ApiRick)

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
        <>
            <div className='containerMenu' >
                <div className='menuH' >
                    {/* <p>|</p> <p>|</p> <p>|</p> */}

                    <input type="checkbox" id="checkbox" onClick={showMenu} />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>

                <h1 style={{
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    fontFamily: 'Gloria Hallelujah, cursive',
                    cursor: 'pointer'

                }} onClick={showMenu}>FILTER</h1>
            </div>
            <aside className={`asideH ${show ? 'show' : 'hide'}`}>




                <img className='imgH' src={logo} alt="rick&morty" width={200} />
                <div className='option-aside'>
                    <h2>GENDER</h2>

                    <select name="gender" id="gender" onChange={({ target: { value } }) => buscarGender(value)}>
                        <option value="">...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>

                    </select>
                </div>

                <div className='option-aside'>
                    <h2>STATUS</h2>

                    <select name="status" id="status" onChange={({ target: { value } }) => buscarStatus(value)}>
                        <option value="">...</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                    </select>
                </div>

                <div className='option-aside'>
                    <h2>SPECIES</h2>

                    <select name="species" id="species" onChange={({ target: { value } }) => buscarSpecie(value)}>
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



            </aside>
        </>
    )
}

export default MenuHam