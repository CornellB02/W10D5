import harvardArt from "./data/harvardart";
import GalleryNavigation from "./components/GalleryNavigation";
function App() {
  // console.log(harvardArt.records)
  console.log(Array.isArray(harvardArt.records))
  // console.log(harvardArt.records[0])
  return (
    <GalleryNavigation gallery={harvardArt.records} > </GalleryNavigation>
    // <h1>Hello from App</h1>
  );
}

export default App;
