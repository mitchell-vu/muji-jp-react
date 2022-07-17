import React from "react";
import { Link } from "react-router-dom";
import { LogoMuji } from "../../assets/icons";

export const HeaderLogo = () => (
  <div className="header__logo">
    <Link className="header__logoLink" to="/">
      <LogoMuji />
    </Link>
  </div>
);
