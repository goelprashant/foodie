import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router";

import { updateCartAction } from "../actions/fetchActions";

const DetailsContainer = () => {

  const {name} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById("header-arrow").style.display = "flex";
  }, []);

  const {
    mainReducer: {
      dishes: {
        recipes
      }
    }
  } = useSelector(state => state);

  const [dish] = recipes.filter(recipe => recipe.name === name);

  const updateCart = (value, name) => {
    dispatch(updateCartAction(value, name));
  }

  return (
    <div>
      <div className="dish-image-container">
        <img src={dish.image} />
      </div>
      <div className="dish-details-wrapper">
        <div className="dish-details-container">
          <div>
            <h3 className="dish-name" title={dish.name}>{dish.name}</h3>
            <p className="dish-price">₹ {dish.price}</p>
          </div>
          {dish.quantityAdded ? <button className="primary-button"><span onClick={(ev) => {ev.stopPropagation();updateCart("REMOVE",dish.name)}}>-</span><span>{dish.quantityAdded}</span><span onClick={(ev) => {ev.stopPropagation();updateCart("ADD",dish.name)}}>+</span></button> 
          :<button className="primary-button align-center" onClick={(ev) => {ev.stopPropagation();updateCart("ADD",dish.name)}}>ADD TO BAG</button>}
        </div>
        <div className="dish-details-category">
          <div>
            <span>Category: {dish.category}</span>
          </div>
          <div>
            <span><span className="star-icon"><i className="fa fa-star" aria-hidden="true"></i></span>{dish.rating} Rating, ({dish.reviews} reviews)</span>
          </div>
        </div>
        <div className="dish-details-description-wrapper">
          <div className="dish-details-heading">Details</div>
          <div className="dish-description">{dish.details}</div>
        </div>
      </div>
    </div>
  )
}

export default DetailsContainer;