import React from "react";
import { useHistory } from "react-router-dom";

const AppHeader = () => {

  const history = useHistory();

  const goBack = () => {
    history.push('/');
  }
  return (
    <header className="header">
      <button onClick={goBack} id="header-arrow" className="left-arrow-icon"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
      Best Food App
    </header>
  )
}

export default AppHeader;