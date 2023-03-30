import './App.css'
import NavBar from "./componentes/navBar";
import HomePage from "./componentes/homePage";
import Banner from "./componentes/banner";
import About from "./componentes/about";




function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <HomePage />
      <About />
    </div>
  )
}

export default App;
