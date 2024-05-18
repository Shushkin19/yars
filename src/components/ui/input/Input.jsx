import React from "react";
import classes from "./Input.module.css";

//TODO[ashushkin] Create beautiful input
const InputYARS = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.inputDefault} {...props} />;
});

export default InputYARS;
