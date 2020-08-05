import React from "react";

import "./next-button.scss";

export const NextButton = ({ disabled, onHandler }) => {
  return (
    <button
      onClick={onHandler.bind(this)}
      className="btn-next"
      disabled={!disabled}
    >
      Next level
    </button>
  );
};
