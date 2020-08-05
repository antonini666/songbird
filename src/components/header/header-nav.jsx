import React from "react";
import { Spinner } from "../spinner";

export const HeaderNav = ({ loading, classes, step }) => {
  if (loading) {
    return (
      <li className="header__item header__item--loading">
        <Spinner />
      </li>
    );
  }

  return (
    <React.Fragment>
      {Object.keys(classes).map((item, id) =>
        step === id ? (
          <li className="header__item header__item--active" key={id}>
            {item}
          </li>
        ) : (
          <li className="header__item" key={id}>
            {item}
          </li>
        )
      )}
    </React.Fragment>
  );
};
