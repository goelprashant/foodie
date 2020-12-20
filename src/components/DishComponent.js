import React from "react";

const DishComponent = ({dish, buttonText, updateCart, goToDetail}) => {
  return (
    <div onClick={ev => goToDetail(dish.name)}>
      <div className="dish-image-container">
        <img src={dish.image} />
      </div>
      <div className="dish-details-container">
        <div>
          <h3 className="dish-name" title={dish.name}>{dish.name}</h3>
          <p className="dish-price">₹ {dish.price}</p>
        </div>
        {dish.quantityAdded ? <button className="primary-button"><span onClick={(ev) => {ev.stopPropagation();updateCart("REMOVE",dish.name)}}>-</span><span>{dish.quantityAdded}</span><span onClick={(ev) => {ev.stopPropagation();updateCart("ADD",dish.name)}}>+</span></button> 
          :<button className="primary-button align-center" onClick={(ev) => {ev.stopPropagation();updateCart("ADD",dish.name)}}>{buttonText}</button>}
      </div>
    </div>
  )
}

export default DishComponent;