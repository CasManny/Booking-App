import './Hotelstyles.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Rooms } from '../../rooms'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openSlider, setOpenSlider] = useState(false)

  const handleSlider = (i) => {
    setSlideNumber(i)
    setOpenSlider(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1

    }
    setSlideNumber(newSlideNumber)
  }


  return (
    <>
      <Navbar />
      <Header type='list' />
      <div className="hotel__container">
        {openSlider && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='slider__close' onClick={() => setOpenSlider(false)} />
          <FontAwesomeIcon icon={faArrowLeft} className='slider__left' onClick={() => handleMove('l')} />
          <div className="slider__wrapper">
            <img src={Rooms[slideNumber].img} alt="images" className="slider__img" />
          </div>
          <FontAwesomeIcon icon={faArrowRight} className='slider__right' onClick={() => handleMove('r')} />

        </div>}


        <div className="hotel__wrapper">
          <button className="book__now">Reserve or book Now!</button>
          <h1 className="hotel__title">Grand Hotel</h1>
          <div className="hotel__address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 123 New York</span>
          </div>
          <span className="hotel__distance">Excellent location - 500m from Center</span>
          <span className="hotel__priceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotel__images">
            {Rooms.map((item, index) => (
              <div className="hotel__imgwrapper" key={index}>
                <img src={item.img} onClick={() => handleSlider(index)} alt="images" className="hotel__img" />
              </div>
            ))}

          </div>
          <div className="hotel__details">
            <div className="hotel__details-text">
              <h1 className="hotel__title">Stay in the heart of krakov</h1>
              <p className="hotel__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus cum sapiente nemo! Eligendi fuga soluta nulla quam, esse adipisci illo in facilis, voluptatum alias autem laborum neque aut tenetur corrupti error enim voluptates ipsa placeat officia blanditiis consequuntur recusandae quaerat. Labore tempore, nulla debitis aut saepe atque dignissimos ex expedita, adipisci neque illo facilis amet odio nobis explicabo aliquam quaerat, architecto ut nostrum? Quasi expedita quaerat ea, pariatur eius obcaecati. Magnam debitis accusantium, expedita minus ab illum autem voluptas consequuntur natus illo, reiciendis officiis quae quidem id repellendus. Cupiditate distinctio officiis totam inventore accusantium nulla, praesentium consequatur? Omnis, accusantium!</p>

            </div>
            <div className="hotel__details-price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>located in the real heart of krakov, this property has an excellent location score of 9.8</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default Hotel