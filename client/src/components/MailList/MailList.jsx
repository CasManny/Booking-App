import './MailListstyles.css'

const MailList = () => {
  return (
      <div className="mail__list-container">
          <h1 className="mail__list-title">Save Time, save Money</h1>
          <span className="mail__list-desc">Sign up and we'll send the best deals to you</span>
          <div className="mail__list-input__container">
              <input type="text" placeholder='Your Email' />
              <button>Subcribe</button>
          </div>
      </div>
  )
}

export default MailList