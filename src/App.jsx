import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import profileImage from './assets/matt-pahuta.jpg'

function App() {
  return (
    <div className="card">
      <img src={profileImage} alt="" className='profile-image' />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
