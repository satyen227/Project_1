import "./App.css";
import Header from "./component/Header";
import Slider from "./component/slider";
import GenreMovieList from "./component/GenreMovieList";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <GenreMovieList />
    </div>
  );
}

export default App;
