import classNames from "classnames";
import React from "react";
import styles from "../SignupStyling.module.css";

const InitialSignup = ({ userData, setCurrentStep }) => {
  return (
    <main
      id="main"
      className={classNames(styles.main, "animate__animated animate__In")}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
            <div className={classNames(styles.formWrapper, "w-100")}>
              <div className={styles.clientformDiv}>
                <div className={styles.titleBox}>
                  <p className={classNames(styles.title, "mb-0")}>
                    Client signup
                  </p>
                  <p className={styles.desc}>
                    Choose how you would prefer to create your account below
                  </p>
                </div>
                <button
                  onClick={() => {
                    document
                      .getElementById("main")
                      .classList.add("animate__fadeOut");
                    setTimeout(() => setCurrentStep("basicDetails"), 1000);
                  }}
                  tabIndex="0"
                  className="btn mt-2 col-lg-7 btn-transparant btn-block signupBtn rounded-2"
                >
                  Next
                </button>
                <hr className={styles.divider} />
                <p className={styles.loginMsg}>
                  Already have an account?{" "}
                  <u>
                    <a
                      href="https://psychica.seekware.tech/client/login"
                      className={styles.loginlink}
                    >
                      Login
                    </a>
                  </u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InitialSignup;
