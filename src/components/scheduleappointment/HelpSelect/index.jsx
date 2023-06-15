import React from "react";
import axiosInstance from "../../../config/axiosinstance";
import { API_URLS } from "../../../utils/API_URLS";
import styles from "../SignupStyling.module.css";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";

const HelpSelect = ({ userData, setUserData, setCurrentStep }) => {
  const [issues, setIssues] = useState("");
  const [other_issues, setOtherIssues] = useState("");
  const [issuesList, setIssuesList] = useState([]);
  const [otherIssuesList, setOtherIssuesList] = useState([]);
  const onSubmitHandeler = (event) => {
    event.preventDefault();
    const currentFormData = {
      ...userData,
      issues,
      other_issues,
    };
    setUserData(currentFormData);
    document.getElementById("main").classList.add("animate__fadeOut");
    setTimeout(() => setCurrentStep("password"), 1000);
  };

  const getIssuesList = async () => {
    axiosInstance.get(API_URLS.issues).then((res) => {
      setIssuesList(res?.issues?.issueWith);
      setOtherIssuesList(res?.issues?.otherIssues);
    });
  };

  useEffect(() => {
    getIssuesList();
  }, []);
  return (
    <div
      id="main"
      className={classNames(
        "animate__animated animate__fadeIn",
        "container-fluid"
      )}
    >
      <div className="row">
        <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
          <div className={classNames(styles.formWrapper, "w-100")}>
            <div className={styles.formDiv + " h-100"}>
              <div className={styles.titleBox}>
                <p className={classNames(styles.title, "mb-0")}>
                  Help us, help you
                </p>
                <p className={classNames(styles.desc)}>
                  We use AI to help match you with the best psychics in our
                  marketplace and it helps for us to have a bit of preliminary
                  information to start the process. Let us know why you're
                  interested in speaking with a psychic today.
                </p>
              </div>

              <div className={classNames(styles.formtag)}>
                <>
                  <div className="row mb-4">
                    <div className="col d-grid gap-2">
                      <label
                        className={classNames(
                          styles.selectLabel,
                          styles.clientLabel
                        )}
                      >
                        I'm having issues with
                      </label>
                      <select
                        onChange={(e) => setIssues(e.target.value)}
                        className={
                          "form-select fw-bolder " +
                          styles.selectBg +
                          " " +
                          styles.clentSelect
                        }
                        aria-label="Default select example"
                      >
                        <option defaultValue hidden>
                          Select Your Issues
                        </option>
                        {issuesList.map((items) => {
                          return (
                            <option key={items?._id} value={items?.value}>
                              {items?.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col d-grid gap-2">
                      <label
                        className={classNames(
                          styles.selectLabel,
                          styles.clientLabel
                        )}
                      >
                        Select any other issues you’re facing
                      </label>
                      <select
                        onChange={(e) => setOtherIssues(e.target.value)}
                        className={
                          "form-select fw-bolder " +
                          styles.selectBg +
                          " " +
                          styles.clentSelect
                        }
                        aria-label="Default select example"
                      >
                        <option defaultValue hidden>
                          Select Your Issues with
                        </option>
                        {otherIssuesList.map((items) => {
                          return (
                            <option key={items?._id} value={items?.value}>
                              {items?.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col d-grid gap-2">
                      <button
                        className="btn btn-dark btn-block signupBtn rounded-2"
                        role="button"
                        disabled={!issues || !other_issues}
                        onClick={onSubmitHandeler}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
                <div className={styles.copyright}>
                  © 2023 Psychica. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSelect;
