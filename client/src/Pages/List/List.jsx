import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import './Liststyles.css'
import { format, min } from "date-fns"
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import SearchItem from "../../components/SearchItem/SearchItem"



const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search-title">Search</h1>
            <div className="list__search-item">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list__search-item">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && <DateRangePicker
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="list__search-item">
              <label htmlFor="">Options</label>
              <div className="list__search-options">
                <span className="list__search-options__text">Min Price <small>per night</small></span>
                <input type="number" className="list__search-options-input" />
              </div>
              <div className="list__search-options">
                <span className="list__search-options__text">Max Price <small>per night</small></span>
                <input type="number" className="list__search-options-input" />
              </div>
              <div className="list__search-options">
                <span className="list__search-options__text">Adult</span>
                <input type="number" min={1} className="list__search-options-input" placeholder={options.adult} />
              </div>
              <div className="list__search-options">
                <span className="list__search-options__text">Children</span>
                <input type="number" min={0} className="list__search-options-input" placeholder={options.children} />
              </div>
              <div className="list__search-options">
                <span className="list__search-options__text">Rooms</span>
                <input type="number" min={1} className="list__search-options-input" placeholder={options.room} />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list__result">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List