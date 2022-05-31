import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Pages/Home/Homepage'
import Hotel from './Pages/Hotel/Hotel'
import List from './Pages/List/List'


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/hotels' element={<List />} />
              <Route path='/hotels/:id' element={<Hotel />} />
          </Routes>
      </Router>
  )
}

export default App