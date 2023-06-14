import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";
import classNames from "classnames";
import Slider from "react-slick";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./psychictype.module.css";

const RenderingNames = {
  STYLES: "Styles",
  TOOLS: "Tools",
  ABILITIES: "Abilities",
  READING_TOPIC: "Reading Topics",
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Psychictypes = () => {
  const [exploreData, setExploreData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(API_URLS.categoryType)
      .then((res) => setExploreData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <section className={styles.wrapper_main}>
        <div className={classNames(styles.cntr_main, "container-fluid")}>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.heading_para_first}>
                <h2>Explore Psychics</h2>
              </div>
            </div>
            {exploreData?.map((ele, index) => {
              return (
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <p
                    className={classNames(styles.subtitle, "")}
                    style={{ textTransform: "capitalize" }}
                  >
                    Explore by {RenderingNames[ele._id].toLocaleLowerCase()}
                  </p>
                  <div className="slider">
                    <Slider {...settings}>
                      {ele?.list.map((item) => {
                        return (
                          <div key={item.id} className={styles.first_slide}>
                            <div className={styles.main_box}>
                              <p>IX</p>
                              <div className={styles.cent_img}>
                                <img src={item.image} alt="img-exp" />
                              </div>
                            </div>
                            <div className={styles.box_footer}>
                              <h6>{item.name}</h6>
                              <a
                                href={`/professionallists/?type=${item.type}&value=${item.name}`}
                              >
                                Explore <AiOutlineRight />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psychictypes;
