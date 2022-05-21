import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
