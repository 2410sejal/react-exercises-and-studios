import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.cookwithmanali.com/chilli-paneer/";
   let authorPhoto = "https://secure.gravatar.com/avatar/8081981181678babf4597ff5d69d14e6?s=64&d=mm&r=g";
   let authorName = "Manali Singh";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["250 grams paneer","3 tablespoons cornstarch","1/2 teaspoon salt","3 tablespoons all purpose flour","1/4 teaspoon black pepper "];
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
            <h1>Chilli Paneer</h1>
            <p>Chilli Paneer is a popular Indo-Chinese dish where cubes of fried crispy paneer are tossed in a spicy sauce made with<br></br> soy sauce, vinegar, chili sauce! Goes well with rice or noodles!</p>
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
      <img src="https://www.cookwithmanali.com/wp-content/uploads/2016/01/Chilli-Paneer-Restaurant-Style.jpg" height="200"alt="" className="imageUpdates"/>
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
