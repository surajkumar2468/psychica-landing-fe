import React, { useState, useEffect } from "react";
import TypeSlider from "../../components/TypesSlider";
import PsychicListData from "../../components/PsychicListData";
import { API_URLS } from "../../utils/API_URLS";
import axiosInstance from "../../config/axiosinstance"; 

const Landing = () => {
  const [professionalList, setProfessionalList] = useState([]);
  const [exploreData, setExploreData] = useState([]);

  const getPsychicList = async () => {
    axiosInstance
      .get(API_URLS.explorePsychic)
      .then((res) => {
        if (res) {
          setProfessionalList(res);
          console.log("PROFESSIONALS",res);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const getCategory = async () => {
    await axiosInstance
      .get(`${API_URLS.categoryAll}`)
      .then((res) => {
        console.log("RESPONSE_API", res);
        setExploreData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPsychicList();
    getCategory();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <section className="home_sec1">
          <span>
            <video
              data-wf-ignore="true"
              data-object-fit="cover"
              playsinline="playsinline"
              autoplay="autoplay"
              controls="controls"
              muted="muted"
              loop="loop"
            >
              <source
                src="/images/banner.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
            </video>
          </span>
          <div className="home_sec1_content">
            <div>
              <h1>
                Unlocking Insights,
                <span> unleashing potential.</span>
              </h1>
              <p>
                Psychix is a premier marketplace for insightful psychics,
                <span>
                  empowering growth and transformative experiences.
                </span>{" "}
              </p>
              <a href="" className="btn">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="home_sec2">

        <TypeSlider exploreData={exploreData} exploreTopic="Explore By Topic"  />
      </section>
      <section className="home_sec3">
        <PsychicListData professionalList={professionalList} from='landing' />
      </section>

      <div className="container">
        <section className="home_sec4">
          <div className="row">
            <div className="col-12 col-md-6">
              <span className="sec4_oracle">
                <img src="/images/image_oracle.png" alt="" />
              </span>
              <h3>
                Introducing Oracle, the World’s
                <abbr>First AI-Powered Psychic.</abbr>{" "}
              </h3>
              <p>
                When we said we were reimagining human enlightenment, we weren’t
                kidding. Now you can speak to an AI-powered psychic, anytime,
                anywhere.
              </p>
              <a href="" className="btn_sec4">
                Ask the Oracle
              </a>
            </div>
            <div className="col-12 col-md-6">
              <span className="sec4_img">
                <img src="/images/image_sec4.svg" alt="" />
              </span>
            </div>
          </div>
        </section>
        <section className="home_sec5">
          <span>
            <img src="/images/screenshot-img.jpg" alt="" />
          </span>
          <h2>
            Experience enlightenment with the <abbr> latest technologies.</abbr>
          </h2>
          <p>
            From our state-of-the-art video conferencing technology, to the
            industry’s first AI-powered we deliver when it comes to giving our
            clients the latest and greatest in tech. Experience the difference
            for yourself, it’s not only more affordable than other platforms,
            the experience is next-to-none.
          </p>
          <a href="" className="home_sec5_btn">
            See the difference{" "}
          </a>
        </section>
        <section className="home_sec4 home_sec6">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>
                Unlike those other marketplaces,
                <abbr>we simply treat our psychics</abbr>
                <abbr>with love and respect.</abbr>{" "}
              </h3>
              <p>
                From instant payouts to a branded debit card,<br></br>
                Psychics{" "}
              </p>
              <ul>
                <li>
                  <a href="">Signup as a psychic</a>
                </li>
                <li>
                  <a href="">See psychic features </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <span className="sec4_img">
                <img src="/images/rectangle-img.png" alt="" />
              </span>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2">
              <span className="ftr_logo">
                <a href="">
                  <img src="/images/logo.svg" alt="" />
                </a>
              </span>
            </div>
            <div className="col-12 col-md-3">
              <h3>Explore </h3>
              <ul>
                <li>
                  <a href="">By Topic</a>
                </li>
                <li>
                  <a href="">By Ability</a>
                </li>
                <li>
                  <a href="">By Tools</a>
                </li>
                <li>
                  <a href="">By Style</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <ol>
                <li>
                  <a href="">About Psychix</a>
                </li>
                <li>
                  <a href="">Kevin’s Story</a>
                </li>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">The Difference</a>
                </li>
                <li>
                  <a href="">Psychic Features</a>
                </li>
                <li>
                  <a href="">Our Blog</a>
                </li>
                <li>
                  <a href="">Meet Oracle</a>
                </li>
              </ol>
            </div>
            <div className="col-12 col-md-4">
              <span className="ftr_img">
                <div>
                  <img src="/images/illustartion.png" alt="" />
                </div>
                <div>
                  {" "}
                  <img src="/images/illustartion2.png" alt="" />
                </div>{" "}
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftr_bottom">
        <div className="container">
          <div className="ftr_bottom_row">
            <p>Copyright 2023 Profesy, LLC. All rights are reserved.</p>
            <ul>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Advisor Agreement</a>
              </li>
              <li>
                <a href="">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
