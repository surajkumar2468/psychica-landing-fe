import React from "react";
// import { useLocation } from "react-router-dom";

const Header = () => {

  // const location = useLocation();
  // console.log("LOCATION")

  return (
    <header className="header">
      <div className="container">
        <div className="row_hrd">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.svg" alt="" />
            </a>
          </div>
          <a href="/psychictype" className="hrd_select">Explore Psychics</a>
          <div className="hrd_menu">
            <ul>
              <li>
                <a href="/forpsychics" >For Psychics</a>
              </li>
              {/* <li>
                <a href="">How It Works</a>
              </li> */}
              <li>
                <a href="/thediffrence">The Difference</a>
              </li>
            </ul>
          </div>
          <div className="hrd_btn">
            <ul>
              {localStorage.getItem("token") ? (
                <li>
                  <a
                    href={`https://psychica.seekware.tech/client/dashboard?token=${localStorage.getItem(
                      "token"
                    )}&refreshToken=${localStorage.getItem(
                      "userTokenRefresh"
                    )}`}
                  >
                    Dashboard
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a href="https://psychica.seekware.tech/client/login">Login</a>
                  </li>
                  <li>
                    <a href="https://psychica.seekware.tech/client/signup">Signup </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
