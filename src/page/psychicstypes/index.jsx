import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";
import TypeSlider from "../../components/TypesSlider";

const Psychictypes = () => {
  const [exploreType, setExploreData] = useState([]);
  const getCategory = async () => {
    await axiosInstance
      .get(`${API_URLS.categoryType}`)
      .then((res) => {
        console.log("RESPONSE_API", res)
        setExploreData(res) 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const SlideData = [
    {
      id: 1,
      img: "/images/ExploreImages/love.png",
      mainName: "Love",
      btnName: "Explore",
      link: "/category",
      romanNum: "I",
    },
    {
      id: 2,
      img: "/images/ExploreImages/career.png",
      mainName: "Career",
      btnName: "Explore",
      romanNum: "I",
    },
    {
      id: 3,
      img: "/images/ExploreImages/lifepath.png",
      mainName: "Life Path",
      btnName: "Explore",
      romanNum: "XI",
    },
    {
      id: 4,
      img: "/images/ExploreImages/money.png",
      mainName: "Money",
      btnName: "Explore",
      romanNum: "III",
    },
  ];
  return (
    <div className="home_sec3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Explore Psychics</h2>
          </div>
        </div>
      </div>
      {exploreType.map((item) => {
        return (
          <>
            <TypeSlider _id={item._id} exploreData={item.list} />
          </>
        )
      })}
      {/* <TypeSlider subHeading="Explore By Ability" />
      <TypeSlider subHeading="Explore By Tools" />
      <TypeSlider subHeading="Explore By Style" /> */}
      {/* <section className={styles.wrapper_main}>
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
      </section> */}
    </div>
  );
};

export default Psychictypes;
