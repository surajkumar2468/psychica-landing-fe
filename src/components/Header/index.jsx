import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row_hrd">
          <div className="logo">
            <a href="">
              <img src="/images/logo.svg" alt="" />
            </a>
          </div>
          <div className="hrd_select">
            <select name="" id="">
              <option value="">Explore Psychics</option>
              <option value="">Explore Psychics</option>
              <option value="">Explore Psychics</option>
              <option value="">Explore Psychics</option>
            </select>
          </div>
          <div className="hrd_menu">
            <ul>
              <li>
                <a href="">For Psychics</a>
              </li>
              <li>
                <a href="">How It Works</a>
              </li>
              <li>
                <a href="">The Difference</a>
              </li>
            </ul>
          </div>
          <div className="hrd_btn">
            <ul>
              <li>
                <a href="https://psychica.seekware.tech/client/login" target="_blank">Login</a>
              </li>
              <li>
                <a href="https://psychica.seekware.tech/client/signup" target="_blank">Signup </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
