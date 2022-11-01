import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomeContainer from "./Components/Home/HomeContainer";
import Menu from "./Components/Menu/Menu";
import ServicesContainer from "./Components/Services/ServicesContainer";
import BlogContainer from "./Components/Blog/BlogContainer";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/pizza_delicious/" element={<HomeContainer/>}/>
        <Route exact path="pizza_delicious/home" element={<HomeContainer />}/>
        <Route path="pizza_delicious/menu/:path" element={<Menu />}/>
        <Route path="pizza_delicious/services" element={<ServicesContainer/>}/>
        <Route path="pizza_delicious/blog" element={<BlogContainer/>}/>
        <Route path="pizza_delicious/about" element={<About/>}/>
        <Route path="pizza_delicious/contact" element={<Contacts/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
