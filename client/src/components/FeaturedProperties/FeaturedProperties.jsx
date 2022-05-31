import './FeaturedPropertiestyles.css'
import { Rooms } from '../../rooms'

const FeaturedProperties = () => {
    return (
        <div className="featured__properties">
            {Rooms.map((item, index) => (
                <>
                    <div className="featured__properties-item" key={index}>
                        <img src={item.img} alt="" className="featured__properties-img" />
                        <span className="featured__properties-name">{item.title}</span>
                        <span className="featured__properties-city">{item.city}</span>
                        <span className="featured__properties-price">${item.price}</span>
                        <div className="featured__properties-rating">
                            <button>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default FeaturedProperties