import recipedata from "./recipe.json";

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => {
        return (
          <div key={data.name}>
            {data.ingredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.ingredientName}</li>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default IngredientList;