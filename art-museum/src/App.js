import harvardArt from "./data/harvardart";
import GalleryNavigation from "./components/GalleryNavigation";
function App() {
  // console.log(harvardArt)
  return (
    <GalleryNavigation gallery={`${harvardArt}`}></GalleryNavigation>
    // <h1>Hello from App</h1>
  );
}

export default App;
