// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const ReactSlick = props => {
  const {planetsList} = props
  return (
    <div className="slider-container" testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick
