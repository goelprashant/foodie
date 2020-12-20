import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchDishes, filterBySearch, filterByCategory, updateCartAction } from "../actions/fetchActions";
import SearchComponent from "./SearchComponent";
import CategoryComponent from "./CategoryComponent";
import DishComponent from "./DishComponent";

const AppContainer = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    mainReducer: {
      dishes,
      recipes,
      favDishes,
      cart
    }
  } = useSelector(state => state);

  useEffect(() => {
    async function getData(){
      dispatch(fetchDishes());
    }
    getData();
    document.getElementById("header-arrow").style.display = "none";
  }, [dispatch]);

  const selectCategory = value => {
    dispatch(filterByCategory(value));
  }

  const searchDishes = value => {
    dispatch(filterBySearch(value));
  }

  const updateCart = (value, name) => {
    dispatch(updateCartAction(value, name));
  }

  const goToDetail = value => {
    history.push(`/details/${value}`);
  }

  return (
    <>
      <div className="app-body">
        <section>
        <article className="fav-section-wrapper-heading">
          <div>
            <h3>Favourites</h3>
            <p>Enjoy what you have been ordering</p>
          </div>
          <div>
            {cart === 0 ? <span className="cart-icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></span> 
              : <span className="cart-icon active"><i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span>{cart}</span>
                </span>
            }
          </div>
        </article>
        </section>
        <section className="fav-section-wrapper-body">
          <div className="hori-scrollable">
          {favDishes && favDishes.map((fav) => {
            return (
              <div className="fav-dish-wrapper">
                <DishComponent 
                  dish={fav} 
                  buttonText={"reorder"}
                  updateCart={updateCart}
                  goToDetail={goToDetail}
                />                    
              </div>
            )
          })}                
          </div>
        </section>
        <SearchComponent searchDishes={searchDishes} />
        <section className="categories-section">
          <div className="categories-section-header">
            <span className="categories-select-heading">SELECT CATEGORIES</span>
            <span className="categories-select-filter-heading">Filter <span className="filter-icon"><i className="fa fa-filter" aria-hidden="true"></i></span></span>
          </div>
        {dishes && dishes.categories &&
          <CategoryComponent selectCategory={selectCategory} categories={dishes.categories} />
        }
        </section>
        <div className="dish-list-container">
          {recipes.length &&
            recipes.map(dish => <DishComponent 
              dish={dish} 
              updateCart={updateCart}
              goToDetail={goToDetail}
              buttonText={"ADD TO BAG"} />)
          }
        </div>
      </div>
    </>
  )
}

export default AppContainer;