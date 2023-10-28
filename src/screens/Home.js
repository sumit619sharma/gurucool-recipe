import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import axios from 'axios';

const appId = '09def6f2'; // Replace with your Edamam app ID
const appKey = '48be6a8f32ac8d4f7cb1d7bf9cc048db'
const Home = () => {
  
    const [search,setSearch] =useState('milk')
    const [ recipes, setRecipes] = useState([]);
    const navigate  = useNavigate();
  
    const handleSearch = async () => {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${appId}&app_key=${appKey}&field=uri&field=url&field=label&field=image&field=ingredients&field=ingredientLines&field=calories`
      try {
        const response = await axios.get(`${url}`);
      //  console.log('response===', search,  response.data.hits);
        const data  = await  response.data.hits
        setRecipes(data)
      } catch (error) {
        console.error(error);
        setRecipes([]); // Handle no recipe found
      }
    };


useEffect(()=>{
  handleSearch();
},[])
const handleFavorite = ()=> {
  navigate('/bookmark');
}
  
  const handleRecipeClick = (recipeId) => {
    
    navigate(`/recipe/${recipeId}`)
  };

  
  return (
    <div className='row mt-3 '>
    <div className='col-md-4 mx-auto text-center'>
    <input className='m-3 p-2' 
    type="text"
    placeholder="Search for recipes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button style={{backgroundColor: 'purple' , padding:'5px' , color:'white' , borderRadius:'5px' , marginRight:'30px'}} onClick={handleSearch}>Search</button>
  <button style={{backgroundColor: 'green' , padding:'5px' , color:'white' , borderRadius:'5px'}} onClick={handleFavorite}>Favorite</button>
  {recipes.length === 0 ? (
    <p>No recipes found.</p>
  ) : (
    <ul >
    { recipes.map((recipe) => (
        <RecipeList 
        recipe={recipe.recipe}
        handleRecipeClick={handleRecipeClick} />
    ))         
       }
     
    </ul>
  ) }
  </div>      
    </div>
  );
};

export default Home;
