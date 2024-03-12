import React from 'react';
import styles from './Description.module.css';


 function RecipeAuthor(){
    let authorLink = "https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg";
    let authorPhoto = "https://secure.gravatar.com/avatar/8081981181678babf4597ff5d69d14e6?s=64&d=mm&r=g"
    let authorName = " Manali Singh"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "picture of cheff" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
        return(<div> 
            <div>
               <h1>Recipe Title</h1>
               <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
         </div>)
    }

}
export default RecipeDescription;