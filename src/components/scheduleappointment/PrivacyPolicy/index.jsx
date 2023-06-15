import styles from "../SignupStyling.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "../../../config/axiosinstance";
import { API_URLS } from "../../../utils/API_URLS";

const PrivacyPolicy = ({ userData, setIsSignup }) => {
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [findUs, setFindUs] = useState("");
  const [refSite, setRefSite] = useState("california_psychics");
  const [show, setShow] = useState(false);
  const [html, setHtml] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function loadHtml() {
      const response = await fetch("/termsandConditions.html");
      const text = await response.text();
      setHtml(text);
    }
    loadHtml();
  }, []);

  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const registerAction = async (e) => {
    let params = {
      ...userData,
      ref_site: refSite,
      find_us: findUs,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    delete params.confirmPassword;
    setLoader(true);
    axiosInstance
      .post(API_URLS.clientRegister, params)
      .then((data) => {
        console.log(data);
        setIsSignup(true);
        localStorage.setItem("token", data?.tokens?.access?.token);
        localStorage.setItem("userTokenRefresh", data?.tokens?.refresh?.token);
      })
      .catch((err) => setLoader(false));
  };

  const handleClose = () => setShow(false);

  //   useEffect(() => {
  //     if (isSuccess) {
  //       document.getElementById("main").classList.add("animate__fadeOut");
  //       setTimeout(() => router.push("/client/thankyou"), 1000);
  //     }
  //   }, [isSuccess]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main
        id="main"
        className={classNames(styles.main, "animate__animated animate__fadeIn")}
      >
        <div className="container-fluid">
          <div className="row">
            <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
              <div className={classNames(styles.formWrapper, "w-100")}>
                <div className={styles.formDiv + " h-100"}>
                  <div className={styles.titleBox}>
                    <p className={classNames(styles.title, "mb-0")}>
                      Last thing
                    </p>
                    <p className={classNames(styles.desc)}>
                      We love hearing about how our users find our platform, as
                      it helps us expand to a larger user base, which in turn
                      helps lower our rates.
                    </p>
                  </div>

                  <div className={classNames(styles.formtag)}>
                    <>
                      <div className="row mb-4">
                        <div className="col d-grid gap-2">
                          <label className={styles.selectLabel}>
                            Which psychic website have you used before?{" "}
                          </label>
                          <select
                            className={
                              "form-select fw-bolder " +
                              styles.selectBg +
                              " " +
                              styles.clentSelect
                            }
                            aria-label="Default select example"
                          >
                            <option defaultValue>California Psychics</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col d-grid gap-2">
                          <label className={styles.selectLabel}>
                            Where did you find us?
                          </label>
                          <select
                            onChange={(event) => setFindUs(event.target.value)}
                            className={
                              "form-select fw-bolder " +
                              styles.selectBg +
                              " " +
                              styles.clentSelect
                            }
                            aria-label="Default select example"
                          >
                            <option defaultValue hidden>
                              Select Platform
                            </option>
                            <option value="google">Google</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="other">Others</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-check d-flex form-switch">
                            <input
                              className={"form-check-input " + styles.toggleBtn}
                              type="checkbox"
                              onClick={(e) => setIsPrivacy(e.target.checked)}
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              className={
                                "form-check-label " + styles.checkboxLabel
                              }
                              htmlFor="flexSwitchCheckDefault"
                            >
                              I agree to the Profesy{"    "}
                            </label>{" "}
                            <u>
                              <span
                                onClick={handleShow}
                                className={classNames(
                                  styles.terms,
                                  "cursor-pointer ff-Nexa-Bold"
                                )}
                              >
                                Terms & Condition
                              </span>
                            </u>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col d-grid gap-2">
                          <button
                            className="btn btn-dark btn-block signupBtn rounded-2"
                            disabled={loader || !isPrivacy || !findUs}
                            onClick={registerAction}
                          >
                            {loader ? (
                              <>
                                <span
                                  className="spinner-border me-2 spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Loading...
                              </>
                            ) : (
                              "Sign Up"
                            )}
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
      </main>
      <Modal show={show} className={"modalWrapper"} onHide={handleClose}>
        <div className={styles.modalContainer}>
          <div className="d-flex justify-content-end">
            <div onClick={handleClose}>
              <IoMdClose />
            </div>
          </div>
          <div
            className={styles.modalBody}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
