import React, { useEffect, useState } from "react";
import styles from "./psychicdetails.module.css";
import { BsArrowLeftShort, BsStar } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";
import { API_URLS } from "../../utils/API_URLS";
// import { useRouter } from "next/router";
import axiosInstance from "../../config/axiosinstance";
import { toast } from "react-toastify";

const Explorephysicsdetail = () => {
  const [details, setDetails] = useState(null);
  // const router = useRouter();
  // const { id, type, last_route } = router.query;

  const getPsychicdetails = async () => {
    await axiosInstance
      .get(`${API_URLS.psychicDetails}648a88b4d6e0ddc263dccc7e`)
      .then((res) => {
        setDetails({ ...res });
      })
      .catch((error) => {
        toast.error(error?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    // if (id) {
    getPsychicdetails();
    // }
  }, []);

  return (
    <>
      <div className="home_sec2">
        <div>
          <section className={styles.category_detail_page}>
            <div className={classNames(styles.cntr_main, "container-fluid")}>
              <div className="row">
                <div className={classNames("col-md-12 col-sm-12 ")}>
                  <div className={styles.back_name}>
                    <h6>
                      {" "}
                      <BsArrowLeftShort className={styles.back_btn} />
                      {`Back to Psychics`}
                    </h6>
                  </div>
                  <div className={styles.bgbg_img}>
                    <div
                      style={{
                        backgroundImage: `url(${
                          details?.picture
                            ? details?.picture
                            : "/images/ProfileImages/user-bg1.png"
                        })`,
                      }}
                      className={styles.cardBgImage}
                    ></div>
                    <img
                      src={
                        details?.picture
                          ? details?.picture
                          : "/images/ProfileImages/user-bg1.png"
                      }
                      // src={details?.picture}
                      alt=""
                      width="100%"
                      className={styles.bgImg}
                    />
                  </div>
                  <div className={styles.user_check_ftr}>
                    <div className={styles.recomend}>
                      <div className={styles.recomed_decs}>
                        <div className={styles.rating}>
                          {details?.isEmailVerified ? (
                            <>
                              {" "}
                              <AiOutlineCheck />
                              <p>Identity verified</p>
                            </>
                          ) : (
                            <>
                              {" "}
                              <AiOutlineClose />
                              <p>Identity unverified</p>
                            </>
                          )}

                          {/* <AiOutlineCheck />
                        <p>Identity verified</p> */}
                        </div>

                        <div className={classNames(styles.rating, "m-0")}>
                          <BsStar />

                          <p>
                            {details?.review_count}{" "}
                            {details?.review_count > 1 ? "reviews" : "review"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.detail_decs}>
            <div className={classNames(styles.cntr_main, "container-fluid")}>
              <div className="row">
                <div className="col-lg-7 col-sm-12 col-md-12">
                  <div className={styles.main_detail}>
                    <div className={styles.user_names}>
                      <h4 style={{ textTransform: "capitalize" }}>
                        {details?.first_name} {details?.last_name}
                      </h4>
                    </div>
                    <div className={styles.divider_image}>
                      <img
                        src={"/images/ExploreCategoryImages/divider.png"}
                        alt=""
                      />
                    </div>

                    <div className={styles.career_path}>
                      <div className={styles.seclove}>
                        <img
                          src={"/images/ExploreCategoryImages/ReadingType.svg"}
                          alt=""
                          // width="7%"
                        />
                        <span>
                          {details?.topics?.map((ele, index) => (
                            <span>
                              {index !== 0 && ", "}
                              {ele.charAt(0).toUpperCase() + ele.slice(1)}
                            </span>
                          ))}
                        </span>
                      </div>

                      <div className={styles.seclove}>
                        <img
                          src="/images/ExploreCategoryImages/eyeIcon.svg"
                          alt=""
                        />
                        {details?.abilities?.map((ele, index) => (
                          <span>
                            {index !== 0 && ", "}
                            {ele.charAt(0).toUpperCase() + ele.slice(1)}
                          </span>
                        ))}
                      </div>
                      <div className={styles.secloves}>
                        <img
                          src="/images/ExploreCategoryImages/Type.svg"
                          alt=""
                          // width="9%"
                        />
                        {details?.styles?.map((ele, index) => (
                          <span>
                            {index !== 0 && ", "}
                            {ele.charAt(0).toUpperCase() + ele.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.paragraph}>
                      <p>{details?.bio}</p>
                    </div>
                    <h3 className={styles.Psychic_Tools_heading}>
                      Psychic Tools
                    </h3>

                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-4 ">
                        <div className={styles.Psychic_Tools}>
                          {details?.specialities?.map((ele) => {
                            return (
                              <>
                                <div className={styles.Psychic_Tools_name}>
                                  <img
                                    src="/images/ExploreCategoryImages/TarotCards.png"
                                    alt=""
                                    width="8%"
                                  />
                                  <span>
                                    {ele.charAt(0).toUpperCase() + ele.slice(1)}
                                  </span>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-5">
                  <div className={styles.user_about_main}>
                    <div className={styles.user_about_sub}>
                      <div className={styles.user_about_head}>
                        <h2>
                          $ {details?.actual_rate} <span>/minute</span>
                        </h2>

                        <img
                          // src="/images/ExploreCategoryImages/userimg.png"
                          src={
                            details?.picture
                              ? details?.picture
                              : "/images/dummyAvatar.png"
                          }
                          alt=""
                        />
                        <img
                          src="/images/ExploreCategoryImages/check.svg"
                          className={styles.check}
                          alt=""
                        />
                        {/* <AiFillCheckCircle className={styles.check}/> */}
                      </div>
                    </div>
                    <div className={styles.user_rating}>
                      <div className={styles.user_rating_count}>
                        <img
                          src="/images/ExploreCategoryImages/star.svg"
                          alt=""
                        />
                        <h2>
                          {details?.average_rating}
                          <span>
                            ({details?.review_count || 0}{" "}
                            {details?.review_count > 1 ? "reviews" : "review"})
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className={styles.user_status}>
                      <div
                        className={
                          styles.user_status_calender +
                          " " +
                          styles.user_status_calender_border
                        }
                      >
                        <img
                          src="/images/ExploreCategoryImages/calender.svg"
                          alt=""
                          className={styles.status_img}
                        />
                        <div className={styles.user_status_decs}>
                          <span>Status</span>
                          <h3>Available</h3>
                        </div>
                      </div>

                      <div className={styles.user_status_calender}>
                        <img
                          src="/images/ExploreCategoryImages/calender.svg"
                          alt=""
                        />
                        <div
                          className={classNames(
                            styles.user_status_decs,
                            styles.user_status_decs1
                          )}
                        >
                          <span>Estimated Wait</span>
                          <h3>0 minutes</h3>
                        </div>
                      </div>
                      <div className={classNames(styles.user_status_calender)}>
                        <img
                          src="/images/ExploreCategoryImages/user.svg"
                          alt=""
                        />
                        <div className={styles.user_status_decs}>
                          <span>Time Minimum</span>
                          <h3>30 minutes</h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.user_btn}>
                      <button
                        // onClick={() => {
                        //   if (!userProfile?.isEmailVerified) {
                        //     Swal.fire({
                        //       title: "Please Verify your email",
                        //       icon: "error",
                        //       confirmButtonText: "OK",
                        //     });
                        //   } else {
                        //     router.push(
                        //       `/client/appointment-now/${id}?${
                        //         details?.picture
                        //           ? "picture=" +
                        //             details?.picture?.replace("https://", "")
                        //           : ""
                        //       }&price=${details?.actual_rate}&type=${
                        //         type ? type : ""
                        //       }&name=${details?.first_name}&timezone=${
                        //         details?.timezone
                        //       }`
                        //     );
                        //   }
                        // }}
                        className={classNames(
                          // !userProfile?.isEmailVerified && "diabled-btn",
                          styles.user_e_btnsnd
                        )}
                      >
                        Meet
                        {/* <TbShoppingBag /> */}
                      </button>
                    </div>

                    {/* <div className={styles.user_report}>
                    <img src="/images/ExploreCategoryImages/flag.png" alt="" />
                    <p>Report this psychic</p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Explorephysicsdetail;
