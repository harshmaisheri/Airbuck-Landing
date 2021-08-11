import "./Assets/Styles/App.scss";
import "aos/dist/aos.css";
import "./Assets/Styles/_slick.scss";
import "./Assets/Styles/_slickTheme.scss";

import AOS from "aos";
import Header from "./Components/Layouts/Header/Header";
import HomePage from "./Screens/HomePage/HomePage";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
