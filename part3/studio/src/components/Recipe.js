const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/about/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2021/08/Sally-McKenney-680x452.jpg";
   let authorName = "Sally";

   return (
      <div>
         <img src={authorPhoto} alt = "Sally" style={{objectFit: "contain", borderRadius: "50%"}} width="200px" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["all-purpose flour", "granulated sugar", "salt", "platinum yeat from red star", "whole milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/12/giant-cinnamon-roll-cake-4.jpg" alt="Giant Cinnamon Roll Cake" className="imageUpdates" width="200px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}