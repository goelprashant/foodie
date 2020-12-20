import React, { useState } from "react";

const CategoryComponent = ({selectCategory, categories}) => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const selectCat = e => {
    console.log(e.target.id)
    setSelectedCategory(e.target.id);
    selectCategory(e.target.id);
  }
  
  return (
    <div className="categories-bar hori-scrollable">
      {categories && categories.map((category) => {
        return (
          <div className="category-wrapper" key={category.name}>
            <input type="radio" name="radio" id={category.name} checked={category.name===selectedCategory} onChange={selectCat} />
            <label className="category-label" htmlFor={category.name}>
              <img className="category-icon" alt="categoryImage" src={category.image} />
              <span>{category.name}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryComponent;