
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import RecipeDetails from './screens/RecipeDetails';
import ShowFavorite from './screens/ShowFavorite';

function App() {
  return (
    <div className="App">
       <BrowserRouter >
       <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/recipe/:recipeId" element={<RecipeDetails/>} />
       <Route path="/bookmark" element={<ShowFavorite/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
