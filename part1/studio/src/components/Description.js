import styles from './Description.module.css;
import React from 'react';

function RecipeAuthor() {
  // "https://www.foodnetwork.com/recipes/alton-brown/crepes-recipe-1911037"
  let authorName = "Alton Brown";
  let authorLink = "https://altonbrown.com/";
  let authorPhoto = "https://images.seattletimes.com/wp-content/uploads/2016/11/70c74d37767d4daa860a24312e37e6c6.jpg?d=780x1170";
  return(
    <div className = {StyleSheet.recipeAuthorBlock}>
      <img src = {authorPhoto} alt = "Alton Brown" className = {StyleSheet.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href = {authorLink}>Alton Brown - Crepes</a>
      </div>
    </div>
  )
};

class RecipeDescription extends React.Component {
  render() {
    return(
      <div> 
        <div>
          <h1>Crepes</h1>
          <p>Crepe Expectations</p>
        </div>
        <RecipeAuthor />
      </div>
    );    
  }
};

export default RecipeDescription;