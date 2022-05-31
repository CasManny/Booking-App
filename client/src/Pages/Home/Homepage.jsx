import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import './Homestyles.css'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div className="home__container">
      <Featured />
      <h1 className="home__title">Browse by property type</h1>
      <PropertyList />
      <h1 className="home__title">Homes guests love</h1>
      <FeaturedProperties />
      <MailList />
      <Footer />
    </div>
    </>
  )
}

export default Homepage