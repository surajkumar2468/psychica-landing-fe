import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PsychicListData from "../../components/PsychicListData";

const ProfessionalLists = () => {
  const searchParams = useLocation();
  useEffect(() => {
    console.log(searchParams.search);
  }, []);
  return (
    <div className="home_sec3">
      <section className='explore_category_sec'>
        <div className='container'>
          <h2>Explore Love Psychics</h2>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <div className='category_hedding'><h5>Muze</h5><p><img src="/images/abilities-icon.svg" alt="" />Empath, Medium, Clairvoyant</p></div>
              <div className='img_explore_sec'>
                <img src="/images/pexels-pavel-danilyuk.jpg" alt="" />
                <p><img src="/images/check_icon.svg" alt="" />
                  Recommended By Staff</p>
              </div>
            </div>
            <div className='col-12 col-md-5'>
              <div className='category__right_main'>
                <div className='category__right_row1'>
                  <div>
                    <h3> <b>$1</b> $0.80 <small>/minute</small></h3>
                    <div className='star__rating'><img src="/images/star-icon.svg" alt="" /> 4.8 <i>(12 reviews)</i></div>
                  </div>
                  <div className='star__img'>
                    <img src="/images/pexels-pavel-danilyuk2.png" alt="" />
                    <span><img src="/images/check_green.svg" alt="" /></span>
                  </div>
                </div>
                <div className='category__right_row2'>
                  <ul>
                    <li>
                      <span><img src="/images/status_icon.svg" alt="" /></span>
                      <h4>Status <b>Available</b></h4>
                    </li>
                    <li>
                      <span><img src="/images/status_icon.svg" alt="" /></span>
                      <h4>Estimated Wait <b>0 minutes</b></h4>
                    </li>
                    <li>
                      <span><img src="/images/man_icon.svg" alt="" /></span>
                      <h4>Time Minimum <b>30 minutes</b></h4>
                    </li>
                  </ul>
                </div>
                <div className='category__right_row3'>
                  <ul>
                    <li>
                      <a href=''>Learn About Tina</a>
                    </li>
                    <li>
                      <a href=''>Meet With Tina
                        <img src="/images/shopping_bag_icon.svg" alt="" /> </a>
                    </li>
                  </ul>
                  <p className='right_row3_tag'>
                    <img src="/images/report_icon.svg" alt="" />
                    Report this psychic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PsychicListData />
    </div>
    // <>
    //   {empty ? (
    //     <>
    //       <NoDataMsg
    //         message="No psychics Available"
    //         img="/images/loadImg/new.svg"
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <section className={styles.wrapper_main}>
    //         <div className={classNames(styles.cntr_main, "container-fluid")}>
    //           <div id="explore-PsychicContainer" className="row">
    //             <div className="col-md-12">
    //               <div className={styles.main_heading}>
    //                 <h2>Explore {router?.query?.value} Psychics</h2>
    //               </div>
    //             </div>

    //             <div className="col-md-12 col-lg-7 col-sm-12">
    //               <div className={styles.user_bio}>
    //                 <div className={styles.user_name}>
    //                   <h3 style={{ textTransform: "capitalize" }}>
    //                     {defaultProfile?.first_name}
    //                   </h3>
    //                 </div>
    //                 <div
    //                   className={classNames(
    //                     styles.user_decs,
    //                     " d-flex align-items-center"
    //                   )}
    //                 >
    //                   <img
    //                     src="/images/ExploreCategoryImages/eyeIcon.svg"
    //                     alt=""
    //                   />
    //                   {defaultProfile?.abilities?.map((ele, index) => {
    //                     return (
    //                       <p>
    //                         {index !== 0 && ", "}
    //                         {ele?.charAt(0).toUpperCase() + ele.slice(1)}
    //                       </p>
    //                     );
    //                   })}
    //                 </div>
    //                 <div className={styles.user_img}>
    //                   <div
    //                     style={{
    //                       backgroundImage: `url(${
    //                         defaultProfile?.picture
    //                           ? defaultProfile?.picture
    //                           : "/images/ProfileImages/user-bg1.png"
    //                       })`,
    //                     }}
    //                     className={styles.cardBgImage}
    //                   ></div>
    //                   <img
    //                     src={
    //                       defaultProfile?.picture
    //                         ? defaultProfile?.picture
    //                         : "/images/ProfileImages/user-bg1.png"
    //                     }
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className={styles.user_check_ftr}>
    //                   <div className={styles.recomend}>
    //                     <div className={styles.recomed_decs}>
    //                       <AiOutlineCheckCircle
    //                         className={styles.recomend_checkIcon}
    //                       />
    //                       <p>Recommended By Staff</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="col-md-12 col-sm-12 col-lg-5">
    //               <div className={styles.user_about_main}>
    //                 <div className={styles.user_about_sub}>
    //                   <div className={styles.user_about_head}>
    //                     <h2 className="mb-0">
    //                       ${defaultProfile?.actual_rate} <span>/minute</span>
    //                     </h2>

    //                     <img
    //                       // src="/images/ExploreCategoryImages/userimg.png"
    //                       src={
    //                         defaultProfile?.picture
    //                           ? defaultProfile?.picture
    //                           : "/images/dummyAvatar.png"
    //                       }
    //                       alt=""
    //                     />
    //                     <img
    //                       src="/images/ExploreCategoryImages/check.svg"
    //                       className={styles.check}
    //                       alt=""
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className={styles.user_rating}>
    //                   <div className={styles.user_rating_count}>
    //                     <img
    //                       src="/images/ExploreCategoryImages/star.svg"
    //                       alt=""
    //                     />
    //                     <h2>
    //                       {defaultProfile?.average_rating}{" "}
    //                       <span>
    //                         {defaultProfile.review_count || 0}{" "}
    //                         {defaultProfile.review_count > 1
    //                           ? "reviews"
    //                           : "review"}
    //                       </span>
    //                     </h2>
    //                   </div>
    //                 </div>
    //                 <div className={styles.user_status}>
    //                   <div className={styles.user_status_calender}>
    //                     <img
    //                       src="/images/ExploreCategoryImages/calender.svg"
    //                       alt=""
    //                     />
    //                     <div className={styles.user_status_decs}>
    //                       <span>Status</span>
    //                       <h3>Available</h3>
    //                     </div>
    //                   </div>
    //                   <div className={styles.user_status_calender}>
    //                     <img
    //                       src="/images/ExploreCategoryImages/calender.svg"
    //                       alt=""
    //                     />
    //                     <div className={styles.user_status_decs}>
    //                       <span>Estimated Wait</span>
    //                       <h3>0 minutes</h3>
    //                     </div>
    //                   </div>
    //                   <div className={classNames(styles.user_status_calender)}>
    //                     <img
    //                       src="/images/ExploreCategoryImages/user.svg"
    //                       alt=""
    //                     />
    //                     <div className={styles.user_status_decs}>
    //                       <span>Time Minimum</span>
    //                       <h3>30 minutes</h3>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className={styles.user_btn}>
    //                   <button
    //                     // href={`$/client/dashboard/explorepsychicdetails/${id}?type=${value}`}
    //                     onClick={() => handlePsychicDetails(defaultProfile.id)}
    //                     className={styles.user_e_btn}
    //                   >
    //                     Learn More{" "}
    //                     {/* {defaultProfile?.first_name?.toString()?.substr(0, 2)} */}
    //                   </button>
    //                   <button
    //                     onClick={() => {
    //                       if (!userProfile?.isEmailVerified) {
    //                         Swal.fire({
    //                           title: "Please Verify your email",
    //                           icon: "error",
    //                           confirmButtonText: "OK",
    //                         });
    //                       } else {
    //                         router.push(
    //                           `/client/appointment-now/${defaultProfile?.id}?${
    //                             defaultProfile?.picture
    //                               ? "picture=" +
    //                                 defaultProfile?.picture.replace(
    //                                   "https://",
    //                                   ""
    //                                 )
    //                               : ""
    //                           }&price=${
    //                             defaultProfile.actual_rate
    //                           }&type=${value}&name=${
    //                             defaultProfile?.first_name
    //                           }&timezone=${defaultProfile?.timezone}`
    //                         );
    //                       }
    //                     }}
    //                     className={classNames(
    //                       styles.user_e_btnsnd,
    //                       !userProfile?.isEmailVerified && "diabled-btn"
    //                     )}
    //                   >
    //                     Meet
    //                   </button>
    //                 </div>
    //                 {/* <div className={styles.user_report}>
    //                   <CgFlagAlt />
    //                   <p className="ms-2">Report this psychic</p>
    //                 </div> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>

    //       <section className={styles.wrapper_recommend}>
    //         <div className={classNames(styles.cntr_main, "container-fluid")}>
    //           <div className="row">
    //             <div className="col-lg-12 col-md-12 col-sm-12">
    //               <div className={styles.sub_heading}>
    //                 <h2>
    //                   {" "}
    //                   {heading == "reading_topic"
    //                     ? "Reading Topic"
    //                     : heading}{" "}
    //                   Psychics Recommended For You
    //                 </h2>
    //               </div>
    //             </div>

    //             {/* <div className="d-flex flex-wrap gap-4 justify-content-between"> */}
    //             {promoted?.map((ele) => {
    //               return (
    //                 <div
    //                   className="mt-5 position-relative col-lg-6 col-md-12 col-sm-12 cursor-pointer"
    //                   onClick={() => handlePsychicDetails(ele?.id)}
    //                 >
    //                   <div className={styles.promote_card}>
    //                     <div className={styles.cards}>
    //                       {/* <img
    //                         className={classNames(
    //                           styles.card_image,
    //                           "card-img-top"
    //                         )}
    //                         src={ele?.picture}
    //                         alt="Card image cap"
    //                       /> */}
    //                       <div
    //                         style={{
    //                           backgroundImage: `url(${
    //                             ele?.picture
    //                               ? ele?.picture
    //                               : "/images/dummyAvatar.png"
    //                           })`,
    //                         }}
    //                         className={styles.cardBgImage}
    //                       ></div>
    //                       <img
    //                         src={
    //                           ele?.picture
    //                             ? ele?.picture
    //                             : "/images/dummyAvatar.png"
    //                         }
    //                         className={classNames(
    //                           styles.card_image,
    //                           "card-img-top"
    //                         )}
    //                         alt=""
    //                         width="100%"
    //                       />

    //                       <div className={styles.cardStatus}>Promoted</div>
    //                     </div>

    //                     <div className={styles.main_card_padding}>
    //                       <div className={styles.main_card}>
    //                         <div className={styles.card_body}>
    //                           <h5 className={styles.card_title}>
    //                             {ele?.first_name}
    //                           </h5>
    //                           <div className={styles.card_ftr}>
    //                             <img
    //                               src="/images/ExploreCategoryImages/eyeIcon.svg"
    //                               alt=""
    //                             />
    //                             {ele?.abilities?.map((items, index) => (
    //                               <span className="card-text">
    //                                 {" "}
    //                                 {index !== 0 && ", "}
    //                                 {items.charAt(0).toUpperCase() +
    //                                   items.slice(1)}
    //                               </span>
    //                             ))}
    //                           </div>
    //                         </div>
    //                         <div className={styles.timespans}>
    //                           <span>${ele?.actual_rate}/minute</span>
    //                         </div>
    //                       </div>

    //                       <div className={styles.divider_img}>
    //                         <img
    //                           src={"/images/ExploreCategoryImages/divider.png"}
    //                           alt=""
    //                         />
    //                       </div>

    //                       <div className={styles.card_footer_name}>
    //                         <h4>0m Est. Wait</h4>
    //                         <div className={styles.footer_rating}>
    //                           <img
    //                             src="/images/ExploreCategoryImages/star.svg"
    //                             alt=""
    //                           />
    //                           <h4>
    //                             {ele?.average_rating}
    //                             {"  "}
    //                             <span>
    //                               ({ele?.review_count || 0}{" "}
    //                               {ele?.review_count > 1 ? "reviews" : "review"}
    //                               )
    //                             </span>
    //                           </h4>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             })}
    //           </div>

    //           {false && (
    //             <div className="col-lg-6 col-md-12 col-sm-12">
    //               <div className={styles.promote_card}>
    //                 <div className={styles.cards}>
    //                   <img
    //                     className="card-img-top"
    //                     src="/images/ExploreCategoryImages/img2.png"
    //                     alt="Card image cap"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           )}

    //           <div className="row">
    //             {available?.map((ele) => {
    //               return (
    //                 <>
    //                   <div
    //                     className="position-relative col-lg-4 col-md-12 col-sm-12 mt-5 cursor-pointer"
    //                     onClick={() => handlePsychicDetails(ele?.id)}
    //                   >
    //                     <div className={styles.promote_card}>
    //                       <div className={styles.cards}>
    //                         <img
    //                           className={classNames(
    //                             "card-img-top",
    //                             styles.img_fixing
    //                           )}
    //                           src={ele?.picture}
    //                           alt="Card image cap"
    //                         />
    //                         <div className={styles.cardStatus}>Available</div>
    //                       </div>
    //                       <div className={styles.main_card_padding}>
    //                         <div className={styles.main_card}>
    //                           <div className={styles.card_body}>
    //                             <h5 className={styles.card_title}>
    //                               {ele?.first_name}
    //                             </h5>
    //                             <div className={styles.card_ftr}>
    //                               <img
    //                                 src="/images/ExploreCategoryImages/eyeIcon.svg"
    //                                 alt=""
    //                               />
    //                               {ele?.abilities?.map((items, index) => (
    //                                 <>
    //                                   {/* <OverlayTrigger
    //                                 key="top"
    //                                 placement="top"
    //                                 overlay={
    //                                   <Tooltip id="tooltip-disabled">
    //                                   {items}
    //                                   </Tooltip>
    //                                 }

    //                               >
    //                                 <span className="card-text" style={{fontWeight:"bold"}}>
    //                                   {" "}
    //                                   {index !== 0 && ", "}

    //                                   {items}{" "}
    //                                 </span>
    //                               </OverlayTrigger> */}
    //                                   <span className="card-text">
    //                                     {" "}
    //                                     {index !== 0 && ", "}
    //                                     {/* {items?.toString()?.substr(0, 3)}...{" "} */}
    //                                     {items.charAt(0).toUpperCase() +
    //                                       items.slice(1)}{" "}
    //                                   </span>
    //                                 </>
    //                               ))}
    //                             </div>
    //                           </div>
    //                           <div className={styles.timespans}>
    //                             <span>${ele.actual_rate}/minute</span>
    //                           </div>
    //                         </div>
    //                         <div className={styles.divider_img}>
    //                           <img
    //                             src={
    //                               "/images/ExploreCategoryImages/divider.png"
    //                             }
    //                             alt=""
    //                           />
    //                         </div>

    //                         <div className={styles.card_footer_name}>
    //                           <h4>0m Est. Wait</h4>
    //                           <div className={styles.footer_rating}>
    //                             <img
    //                               src="/images/ExploreCategoryImages/star.svg"
    //                               alt=""
    //                             />
    //                             <h4>
    //                               {ele?.average_rating}{" "}
    //                               <span>
    //                                 {" "}
    //                                 ({ele?.review_count || 0}{" "}
    //                                 {ele?.review_count > 1
    //                                   ? "reviews"
    //                                   : "review"}
    //                                 )
    //                               </span>
    //                             </h4>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </>
    //               );
    //             })}
    //           </div>

    //           <div className="col-lg-12 col-sm-12 col-md-12">
    //             {available ===
    //               6 >
    //               (
    //                 <div className={styles.loader_btn}>
    //                   <button>Show more</button>
    //                 </div>
    //               )}
    //           </div>
    //         </div>
    //         {/* </div> */}
    //       </section>
    //     </>
    //   )}
    // </>
  );
};

export default ProfessionalLists;
