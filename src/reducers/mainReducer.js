import { FETCH_DISHES, SEARCH_FILTER, CATEGORY_FILTER, UPDATE_CART } from "../actions/types";

const initialState = {
  dishes: {},
  favDishes: [],
  recipes: [],
  cart: 0
}

export const mainReducer = (state = initialState, action) => {
  let recipes;
  switch(action.type){

    case FETCH_DISHES:
      recipes = action.payload.recipes;

      for(let i=0;i<recipes.length;i++){
        recipes[i].quantityAdded = 0;
      }

      const favDishes = recipes && recipes.filter(recipe => recipe.isFavourite);
      
      return {
        ...state,
        dishes: action.payload,
        recipes: recipes,
        favDishes
      }

    case SEARCH_FILTER:
      recipes = action.payload.recipes;
      let searchKey = action.payload.toLowerCase();
      recipes = recipes.filter(recipe => (recipe.name.toLowerCase()).indexOf(searchKey)>-1);
      return {
        ...state,
        recipes: recipes
      }

    case CATEGORY_FILTER:
      recipes = action.payload.recipes;
      let selectedCategory = action.payload;
      recipes = recipes && recipes.filter(recipe => recipe.category === selectedCategory);
      return {
        ...state,
        recipes: recipes
      }
    
    case UPDATE_CART:
      recipes = action.payload.recipes;
      let {cart} = state;
      let type = action.payload;
      let name = action.name;

      for(let i=0;i<recipes.length;i++){
        if(recipes[i].name === name){
          if(type === 'ADD'){
            recipes[i].quantityAdded++;
            cart++;
          } else if(type === 'REMOVE'){
            recipes[i].quantityAdded--;
            cart--;
          }
        }
      }

      return {
        ...state,
        recipes,
        cart
      }

    default:
      return state;
  }
}