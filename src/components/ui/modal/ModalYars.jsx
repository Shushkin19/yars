import React from "react";
import cl from "./ModalYars.module.css";

const ModalYars = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.ModalYars];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.ModalContentYars} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalYars;
