import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/fa";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropDown from "./components/Dropdown";
import Titoli from "./components/TitoliRiga";
import PhotoGallery from "./components/Galleria";

function App() {
  return (
    <div className="App">
      <NavBar href="#"></NavBar>
      <DropDown></DropDown>
      <Titoli title="Trending Now"></Titoli>
      <PhotoGallery titolo="money%20heist"></PhotoGallery>
      <Titoli title="Watch it Again"></Titoli>
      <PhotoGallery titolo="Orphan%20Black"></PhotoGallery>
      <Titoli title="New Releases"></Titoli>
      <PhotoGallery titolo="queen"></PhotoGallery>
      <Footer href="#"></Footer>
    </div>
  );
}

export default App;
