import React from "react";

import './Image.css'

const Image = props => {
  const {
    alt,
    ...otherProps
  } = props;


  return (
    <div className="main">

      <img className="Image" alt={alt} {...otherProps} />
    </div>
  );
}

export default Image