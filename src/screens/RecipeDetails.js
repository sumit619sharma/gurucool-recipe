import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import axios from 'axios';

const appId = '09def6f2'; // Replace with your Edamam app ID
const appKey = '48be6a8f32ac8d4f7cb1d7bf9cc048db'

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log('recipeId===',recipeId)
  useEffect(() => {
    // Fetch recipe details using the recipeId from an API or state
    const  fetchRecipeDetails =async () => {
      try {
        const url = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${appId}&app_key=${appKey}&field=uri&field=url&field=label&field=image&field=ingredients&field=ingredientLines&field=calories`
        const response =await axios.get(url)
        
        const data =await  response.data.recipe;
        console.log('resp==',data);
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load recipe details.');
        setLoading(false);
      }
    }

    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>No recipe details found.</div>;
  }

  return (
    <div className='row' >
    <div className='m-auto col-md-6 d-flex flex-column justify-content-center align-items-center ' >
    <h1 style={{color: 'purple'}}>{recipe.label}</h1>
    <img style={{borderRadius: '5px'}} src={recipe.image} alt={recipe.label} />
    <FavoriteButton recipe={recipe} />
    <h2>Ingredients:</h2>
    <ul  >
      {recipe.ingredientLines.map((ingredient, index) => (
        <div   style={{margin:'5px' ,borderRadius: '15px', padding:'5px' , backgroundColor: 'grey'}}  key={index}>{ingredient}</div>
      ))}
    </ul>
     <a href={recipe.url} > <h2>Know more:</h2> </a> 
    <p>{recipe.instructions}</p>
   
    
    </div>
    </div>
  );
};

export default RecipeDetails;
