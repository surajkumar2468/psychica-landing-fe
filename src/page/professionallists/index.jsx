import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PsychicListData from "../../components/PsychicListData";
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";

const ProfessionalLists = () => {

  const [recommendedPsychic, setRecommendedPsychic] = useState(null);
  const [professionalList, setProfessionalList] = useState([]);

  const searchParams = useLocation();
  useEffect(() => {
    console.log(searchParams.search);
  }, []);


  const getProfessionalByType = () => {
    axiosInstance.get(`${API_URLS.psychicCategory}type?type=ABILITIES&value=clairaudient`)
      .then((res) => {
        console.log("RES", res);
        if (res) {
          setRecommendedPsychic(res[0]);
          setProfessionalList(res.slice(1, 7));
        }
      })
  }

  useEffect(() => {
    getProfessionalByType()
  }, [])

  console.log("TOP", recommendedPsychic);

  return (
    <div className="home_sec3">
      <section className='explore_category_sec'>
        <div className='container'>
          <h2>Explore Love Psychics</h2>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <div className='category_hedding'><h5>{recommendedPsychic?.first_name}</h5>
                <p>
                  <img src={"/images/abilities-icon.svg"} alt="" />
                  {
                    recommendedPsychic?.abilities?.map((ability, idx) => {
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
              <div className='img_explore_sec'>
                <img src={recommendedPsychic?.picture} alt="" />
                <p><img src="/images/check_icon.svg" alt="" />
                  Recommended By Staff</p>
              </div>
            </div>

            <div className='col-12 col-md-5'>
              <div className='category__right_main'>
                <div className='category__right_row1'>
                  <div>
                    <h3> ${`${recommendedPsychic?.actual_rate}`} <small>/minute</small></h3>
                    <div className='star__rating'><img src="/images/star-icon.svg" alt="" /> {`${recommendedPsychic?.average_rating}`} <i>{`(${recommendedPsychic?.review_count} reviews)`}</i></div>
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
                      <a href=''>Learn About {recommendedPsychic?.first_name}</a>
                    </li>
                    <li>
                      <a 
                      href={`/appointment-now/${recommendedPsychic?.id}/${recommendedPsychic?.picture}`}
                      >
                        Meet With {recommendedPsychic?.first_name}
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
      <PsychicListData professionalList={professionalList} />
    </div>

  );
};

export default ProfessionalLists;
