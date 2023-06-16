import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./psychictype.module.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import classNames from "classnames";
const TypeSlider = ({ exploreData, _id,exploreTopic }) => {
  console.log("exploreDataexploreData", exploreData);

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
          slidesToShow: 1,
          slidesToScroll: 1,
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


  const RenderingNames = {
    STYLES: "Styles",
    TOOLS: "Tools",
    ABILITIES: "Abilities",
    READING_TOPIC: "Reading Topics",
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <p className={classNames(styles.subtitle, "pt-3 pb-1")}>
          {RenderingNames[_id]}
        </p>
        <h2>{exploreTopic}</h2>
        <div className="slider">
          <Slider {...settings}>
            {exploreData?.map((item) => {
              console.log("DATA_RENDER", item);
              return (
                <>
                  <div className={styles.first_slide}>
                    <div className={styles.main_box}>
                      <p>{"IX"}</p>
                      <div className={styles.cent_img}>
                        <img src={item.image} alt="img-exp" />
                      </div>
                    </div>
                    <div className={styles.box_footer}>
                      <h6>{item.name}</h6>
                      <Link
                        to={{
                          pathname: '/professionallists',
                          search: `type=${_id}&value=${item.name}`,

                        }}
                      >
                        Explore <AiOutlineRight />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TypeSlider;