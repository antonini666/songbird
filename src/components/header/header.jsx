import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { heroClassesLoaded } from "../../services/redux/hero-classes/actions";
import { DotaService } from "../../services/api/dota-service";
import Logo from "../../assets/image/logo.png";
import "./header.scss";

const dotaService = new DotaService();

const Header = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(({ classes }) => {
    return classes.heroClasses;
  });

  console.log(state);

  useEffect(() => {
    dotaService.getHeroClasses().then((data) => {
      dispatch(heroClassesLoaded(data));
    });
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__score">Score:</div>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          {state.map((item, id) => (
            <li className="header__item" key={id}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
