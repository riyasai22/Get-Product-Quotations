import React, { useState } from "react";
import "./Collapsible.css";

function Collapsible({ title, setClickedButton, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setClickedButton("Open_button");
        }}
        className="collapsible__button"
      >
        {title}
      </button>
      <div
        className={`collapsible__content ${
          isOpen ? "collapsible__content--open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
