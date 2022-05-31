import './Headerstyles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCarAlt, faLocation, faMountainCity, faTaxi } from '@fortawesome/free-solid-svg-icons';




const Header = ({ type }) => {

    const navigate = useNavigate()

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [openOptions, setOpenOptions] = useState(false)
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])
    const [openDate, setOpenDate] = useState(false)

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })

    }
    return (
        <div className="header">
            <div className={type === 'list' ? 'header__container list__mode' : 'header__container'}>
                <div className="header__list">
                    <div className="header__list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Bed</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faLocation} />

                        <span>flights</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faCarAlt} />

                        <span>Car Rentals</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faMountainCity} />

                        <span>Attractions</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>

                {type !== 'list' && (
                    <>
                        <h1 className="header__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit.</h1>
                        <p className="header__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis, aliquam velit omnis consequatur vitae iure exercitationem, molestias perferendis hic et maiores, minima ad laboriosam?</p>
                        <button className="header__btn">sign in / Register</button>
                        <div className="header__search">
                            <div className="header__search-item">
                                <span className='header__search-icon'>icon</span>
                                <input type="text" placeholder='Where are you going?' className='header__search-input' onChange={(e) => setDestination(e.target.value)} />
                            </div>
                            <div className="header__search-item" onClick={() => setOpenDate(!openDate)}>
                                <span className='header__search-icon'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                                <span className='header__search-date' >
                                    {openDate && <DateRangePicker
                                        ranges={date}
                                        onChange={item => setDate([item.selection])}
                                        className='date'
                                        minDate={new Date()}

                                    />}

                                </span>
                            </div>
                            <div className="header__search-item">
                                <span className='header__search-icon'>icon</span>
                                <span onClick={() => setOpenOptions(!openOptions)} className="header__search-text"> {options.adult} adult {options.children} children {options.room} rooms  </span>
                                {openOptions && <div className="options">
                                    <div className="options__item">
                                        <span className="option__text">Adult</span>
                                        <div className="options__btn-container">
                                            <button disabled={options.adult <= 1} className="option__counter-btn" onClick={() => handleOption('adult', 'd')}>-</button>
                                            <span className="option__counter-number">{options.adult}</span>
                                            <button className="option__counter-btn" onClick={() => handleOption('adult', 'i')}>+</button>

                                        </div>

                                    </div>
                                    <div className="options__item">
                                        <span className="option__text">children</span>
                                        <div className="options__btn-container">
                                            <button disabled={options.children <= 0} className="option__counter-btn" onClick={() => handleOption('children', 'd')}>-</button>
                                            <span className="option__counter-number">{options.children}</span>
                                            <button className="option__counter-btn" onClick={() => handleOption('children', 'i')}>+</button>

                                        </div>

                                    </div>
                                    <div className="options__item">
                                        <span className="option__text">Rooms</span>
                                        <div className="options__btn-container">
                                            <button disabled={options.room <= 1} className="option__counter-btn" onClick={() => handleOption('room', 'd')}>-</button>
                                            <span className="option__counter-number">{options.room}</span>
                                            <button className="option__counter-btn" onClick={() => handleOption('room', 'i')}>+</button>

                                        </div>

                                    </div>
                                </div>}
                            </div>
                            <div className="header__search-item">
                                <button className="header__btn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header