import React from "react";
import classes from "./ButtonYars.module.css";

//TODO[ashushkin] Add other styles and create style selection option
//Instead 'buttonDefault' indicate the required class, which will be implemented in the css file
const ButtonYars = ({ children, styleClass, ...props }) => {
  return (
    <button {...props} className={classes.buttonDefault}>
      {children}
    </button>
  );
};

export default ButtonYars;
