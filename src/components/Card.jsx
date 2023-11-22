import { Link } from "react-router-dom"


const card = ({ imagen, name, status, gender, species, active, id }) => {
  //   const {data} = useContext(ApiRick)

  return (
    <div className={`tarjeta ${active ? 'white' : 'black'}`}>
      <div className="img">
        
      <Link to={`/${id}`}>
        <img src={imagen} alt="" width={100} className={`${status === 'Alive' ? 'verde' : 'red'}`} />
      </Link>
      </div>

        <div className="info">

          <h2>{name}</h2>

          <div className={`status ${status === 'Alive' ? 'alive' : 'death'}`} >
          {`${status === 'Alive' ? 'Alive' : 'Death'}`}
          </div>
          {/* <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Specie:</strong> {species}</p> */}
        </div>
    </div>

  )
}

export default card
