import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./componentes/navBar";
import HomePage from "./componentes/homePage";
import Banner from "./componentes/banner";
import About from "./componentes/about";
import Work from "./componentes/work";
import Testimonial from './componentes/testimonial';
import Contact from "./componentes/contact";
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <HomePage />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
