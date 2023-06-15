import React from "react";
import styles from "./typeSlider.module.css";
import { AiOutlineRight } from "react-icons/ai";

const TypeSlider = ({ exploreTopic }) => {
  console.log(exploreTopic);
  return (
    <div className="container">
      <h2>Explore By {exploreTopic?._id}</h2>
      <ul className="row">
        {exploreTopic?.list?.map((item) => {
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
                  href={`/professionallists?type=${item.type}&value=${item.name}`}
                >
                  Explore <AiOutlineRight />
                </a>
              </div>
            </div>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default TypeSlider;
