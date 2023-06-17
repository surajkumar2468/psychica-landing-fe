import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PsychicListData = ({ professionalList, from }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const promotedPsychics = professionalList.slice(0, 2);
  const availablePsychic = professionalList.slice(2, professionalList.length);

  const handleDetailsNavigation = (p_id, optionalType) => {
    let queryParams1 = {};
    if (from) {
      queryParams1 = {
        type: from === "landing" ? optionalType : queryParams.get("type"),
        previous: "Dashboard",
      };
    } else {
      queryParams1 = {
        type: from === "landing" ? optionalType : queryParams.get("type"),
      };
    }

    navigate({
      pathname: `/psychicdetails/${p_id}`,
      search: new URLSearchParams(queryParams1).toString(),
    });
  };

  return (
    <>
      {promotedPsychics ? (
        <div className="container">
          <h2>Explore Psychics</h2>
          <div className="row">
            {promotedPsychics?.map((ele) => {
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
                          <h5
                            className="cursor-pointer"
                            onClick={() =>
                              handleDetailsNavigation(
                                ele?.id,
                                ele?.abilities[0]
                              )
                            }
                          >
                            {ele?.first_name}
                          </h5>
                          <p>
                            <img src="/images/abilities-icon.svg" alt="" />
                            {ele?.abilities?.map((ability, idx) => {
                              return (
                                <span>
                                  {idx !== 0 && ", "}
                                  {ability?.charAt(0).toUpperCase() +
                                    ability.slice(1)}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                        <div
                          className="home_sec3_row_right cursor-pointer"
                          onClick={() =>
                            handleDetailsNavigation(ele?.id, ele?.abilities[0])
                          }
                        >
                          <h6>
                            ${ele?.actual_rate}/minute
                            {ele?.discounted_rate && (
                              <strong>${ele?.discounted_rate}/minute</strong>
                            )}
                          </h6>
                        </div>
                      </div>
                      <div className="home_sec3_bottom">
                        <h4>0min Est. Wait</h4>
                        <div>
                          <img src="/images/star-icon.svg" alt="" />{" "}
                          {ele?.average_rating || 0}{" "}
                          <i>{`(${ele?.review_count} reviews)`}</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {availablePsychic?.map((ele) => {
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
                          <h5
                            className="cursor-pointer"
                            onClick={() =>
                              handleDetailsNavigation(
                                ele?.id,
                                ele?.abilities[0]
                              )
                            }
                          >
                            {ele?.first_name}
                          </h5>
                          <p className="d-flex flex-warp">
                            <img src="/images/abilities-icon.svg" alt="" />
                            {ele?.abilities?.map((ability, idx) => {
                              return (
                                <span>
                                  {idx !== 0 && ", "}
                                  {ability?.charAt(0).toUpperCase() +
                                    ability.slice(1)}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                        <div
                          className="home_sec3_row_right cursor-pointer"
                          onClick={() =>
                            handleDetailsNavigation(ele?.id, ele?.abilities[0])
                          }
                        >
                          <h6>
                            ${ele?.actual_rate}/minute
                            {ele?.discounted_rate && (
                              <strong>${ele?.discounted_rate}/minute</strong>
                            )}
                          </h6>
                        </div>
                      </div>
                      <div className="home_sec3_bottom">
                        <h4>0m Est. Wait</h4>
                        <div>
                          <img src="/images/star-icon.svg" alt="" />{" "}
                          {ele?.average_rating || 0}{" "}
                          <i>{`(${ele?.review_count} reviews)`}</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h3> No Data Avaiable</h3>
      )}
    </>
  );
};

export default PsychicListData;
