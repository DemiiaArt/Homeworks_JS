// import logo from './logo.svg';
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import NavMenu from "./Components/NavMenu.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <NavMenu />
        <Hero />
      </section>
    </div>
  );
}

export default App;
