import { useState } from "react";

const FavoriteButton = ({recipe}) => {
    
  
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handleFavoriteToggle = () => {
      
      setIsFavorite(!isFavorite);
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      
      if (isFavorite) {
      
        const updatedFavorites = favoriteRecipes.filter((r) => r.id !== recipe.id);
        localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      } else {
        // Add the recipe to favorites
        favoriteRecipes.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      }
    };
  
    return (
      <div>
        
        <button  style={{ borderRadius:'5px'  ,backgroundColor: isFavorite? 'red': 'purple' , color: 'white', padding: '5px' , marginTop: '5px'   }} onClick={handleFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    );
  };
  
  export default FavoriteButton;