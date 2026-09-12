import HomePage from './pages/HomePage.jsx';
import Navbars from './components/Navbars.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbars values={"PRODUCTS"}/>
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
