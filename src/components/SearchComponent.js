import React, {useState} from "react";

const SearchComponent = ({searchDishes}) => {

  const [searchKey, setSearchKey] = useState("");

  const search = e => {
    setSearchKey(e.target.value);
    searchDishes(e.target.value);
  }

  return (
    <div className="search-bar-container">
      <label className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></label>
      <input type="text" value={searchKey} onChange={search} placeholder="Search" className="search-bar" />
    </div>
  )
}

export default SearchComponent;