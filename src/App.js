import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Titoli from "./components/TitoliRiga";
import PhotoGallery from "./components/Galleria";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShowPage from "./components/TVShows";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar href="#"></NavBar>
        <DropDown></DropDown>
        <Titoli title="Trending Now"></Titoli>
        <PhotoGallery titolo="money%20heist"></PhotoGallery>
        <Titoli title="Watch it Again"></Titoli>
        <PhotoGallery titolo="Orphan%20Black"></PhotoGallery>
        <Titoli title="New Releases"></Titoli>
        <PhotoGallery titolo="queen"></PhotoGallery>
        <Footer href="#"></Footer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tv-shows" element={<TVShowPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
