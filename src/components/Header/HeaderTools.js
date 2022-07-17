import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconCart, IconPerson, IconSupport } from "../../assets/icons";

const CartTmb = styled.span`
  &::before {
    display: block;
    position: absolute;
    width: 100%;
    content: "${(props) => props.totalQuantity}";
    border-radius: 10px;
    color: rgb(60, 60, 67);
    font-size: 15px;
    line-height: 1;
    text-align: center;
    top: 9px;
    left: 0px;
    margin-left: 1.5px;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-weight: bold;
  }
`;

const LoginBtn = () => {
  return (
    <div id="LoginIcon" className="header__tool header__tool--login" style={{ cursor: "pointer", height: "100%" }}>
      <div className="header__toolBtn" id="user" role="button" tabIndex="0" aria-label="ログインメニューを開く">
        <span className="header__toolTmb">
          <IconPerson />
        </span>
        <span className="header__toolTxt">
          <span>ログイン</span>
        </span>
      </div>
    </div>
  );
};

const CartBtn = () => {
  return (
    <div className="header__tool header__tool--cart">
      <Link className="header__toolBtn" to="/cart">
        <div className="header__toolBtn" role="button" tabIndex="0" aria-label="サポートメニューを開く">
          <CartTmb className="header__toolTmb" totalQuantity={2}>
            <IconCart />
          </CartTmb>
          <div className="header__toolTxt">
            <span>カート</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const SupportBtn = () => {
  return (
    <div id="SupportIcon" className="header__tool header__tool--support" style={{ cursor: "pointer", height: "100%" }}>
      <div className="header__toolBtn" role="button" tabIndex="0" aria-label="サポートメニューを開く">
        <span className="header__toolTmb">
          <IconSupport />
        </span>
        <div className="header__toolTxt">
          <span>サポート</span>
        </div>
      </div>
    </div>
  );
};

export const HeaderTools = () => {
  return (
    <div className="header__tools">
      <LoginBtn />
      <CartBtn />
      <SupportBtn />
    </div>
  );
};
