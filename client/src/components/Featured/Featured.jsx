import './Featuredstyles.css'
import { Rooms } from '../../rooms'
const Featured = () => {
  return (
      <div className="featured">
          {Rooms.map((item, index) => (
              <div className="featured__item" key={index}>
                  <img src={item.img} alt={item.title} className='featured__img' />
                  <div className="featured__titles">
                      <h1>{item.title}</h1>
                      <h2>{item.subtitle}</h2>
                  </div>
              </div>
          ))}
          
      </div>
  )
}

export default Featured