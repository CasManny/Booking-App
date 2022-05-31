import './searchitemstyles.css'
import { Rooms } from '../../rooms'


const SearchItem = () => {
    return (
        <>
            {Rooms.map((item, index) => (
                <div className="search__item" key={index}>
                    <img src={item.img} alt="" className="search__item-img" />
                    <div className="search__item-desc">
                        <h1 className="search__item-title">Tower Street Apartments</h1>
                        <span className="search__item-distance">500m From center</span>
                        <span className="search__item-taxiOp">Free Airport taxi</span>
                        <span className="search__item-subtitle">Studio Apartment with Air conditioning</span>
                        <span className="search__item-features">Entire studio + 1 bathroom + 21m 1 full bed</span>
                        <span className="search__item-cancelOp">Free cancellation</span>
                        <span className="search__item-canelOpSubtitle">You can cancel later, so lock in this great price today</span>
                    </div>
                    <div className="search__item-details">
                        <div className="search__item-rating">
                            <span>Excellent</span>
                            <button>8.9</button>
                        </div>
                        <div className="search__item-details__text">
                            <span className="search__item-details__price">$123</span>
                            <span className="search__item-details__taxOp">Includes taxes and fees</span>
                            <button className="search__item-details__checkBtn">see availability</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SearchItem