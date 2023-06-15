import React, { useEffect, useState } from "react"; import { API_URLS } from "../../utils/API_URLS";
import axiosInstance from "../../config/axiosinstance";


const PsychicListData = () => {

  const [promotedPsychics, setPromotedPsychics] = useState([]);
  const [availablePsychic, setAvailablePsychic] = useState([]);

  const getPsychicList = async () => {
    axiosInstance
      .get(API_URLS.explorePsychic)
      .then((res) => {
        console.log("RES", res);
        setPromotedPsychics(res.slice(0, 2));
        setAvailablePsychic(res.slice(2, 8));
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getPsychicList();
  }, [])


  return (
    <div className="container">
      <h2>Explore Psychics</h2>
      <div className="row">

        {
          promotedPsychics?.map((ele) => {
            return (
              <div className="col-12 col-md-6">
                <div className="home_sec3_main">
                  <span className="img__sec3">
                    <img src={ele?.picture} alt="" />
                    <b>PROMOTED</b>
                  </span>
                  <div className="home_sec3_content">
                    <div className="home_sec3_row">
                      <div>
                        <h5>{ele?.first_name}</h5>
                        <p>
                          <img src="/images/abilities-icon.svg" alt="" />
                          {
                            ele?.abilities?.map((ability, idx) => {
                              return (
                                <span>
                                  {idx !== 0 && ", "}
                                  {ability?.charAt(0).toUpperCase() + ability.slice(1)}
                                </span>
                              )
                            })
                          }
                        </p>
                      </div>
                      <div className="home_sec3_row_right">
                        <h6>
                          ${ele?.actual_rate}/minute
                          <strong>${ele?.discounted_rate}/minute</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="home_sec3_bottom">
                      <h4>0m Est. Wait</h4>
                      <div>
                        <img src="/images/star-icon.svg" alt="" /> ${ele?.average_rating}{" "}
                        <i>{`(${ele?.review_count} reviews)`}</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

        {
          availablePsychic?.map((ele) => {
            return (
              <div className="col-12 col-md-4">
                <div className="home_sec3_main">
                  <span className="img__sec3">
                    <img src={ele?.picture} alt="" />
                    <b>AVAILABLE</b>
                  </span>
                  <div className="home_sec3_content">
                    <div className="home_sec3_row">
                      <div>
                        <h5>{ele?.first_name}</h5>
                        <p className="d-flex flex-warp">
                          <img src="/images/abilities-icon.svg" alt="" />
                          {
                            ele?.abilities?.map((ability, idx) => {
                              return (
                                <span>
                                  {idx !== 0 && ", "}
                                  {ability?.charAt(0).toUpperCase() + ability.slice(1)}
                                </span>
                              )
                            })
                          }
                        </p>
                      </div>
                      <div className="home_sec3_row_right">
                        <h6>
                        ${ele?.actual_rate}/minute
                          <strong>${ele?.discounted_rate}/minute</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="home_sec3_bottom">
                      <h4>0m Est. Wait</h4>
                      <div>
                        <img src="/images/star-icon.svg" alt="" /> ${ele?.average_rating}{" "}
                        <i>{`(${ele?.review_count} reviews)`}</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PsychicListData;