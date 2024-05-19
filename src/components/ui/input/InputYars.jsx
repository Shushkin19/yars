import React from "react";
import classes from "./InputYars.module.css";

//TODO[ashushkin] Create beautiful input
const InputYars = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.inputDefault} {...props} />;
});

export default InputYars;
