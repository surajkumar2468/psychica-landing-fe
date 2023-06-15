import React, { useEffect, useState } from 'react'
import PsychicCard from '../../components/PsychicCard'
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Index = () => {

  const [details, setDetails] = useState(null)
  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const getProfessionalDetail = () => {
    axiosInstance.get(`${API_URLS.psychicDetails}${id}`)
      .then((res) => {
        console.log("RES", res);
        setDetails(res);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  useEffect(() => {
    getProfessionalDetail();
  }, []);

  return (
    <div>
      <section className='psychic_details'>
        <div className='container'>
          <div className='back_btn'>
            <a href=''><img src="/images/icon_arrow.svg" alt="" />
              Back to Love Psychics</a>
          </div>
          <div className='img_explore_sec'>
            <span className='main_img_explore'><img src={details?.picture} className='img_explore_blur' alt="" />
              <span className='center_img_explore'>  <img src={details?.picture} alt="" /> </span>
            </span>
            <p><img src="/images/check_icon.svg" alt="" />
              Identity verified  <img src="/images/shape_star.svg" alt="" className='shape_star' />
              256 reviews</p>
          </div>
        </div>
      </section>
      <section className='psychic_details2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-7 pe-md-5'>
              <div className='psychic_details2_left'>
                <h2>{`${details?.first_name} ${details?.last_name[0]}`}</h2>
                <ul className='psychic_details2_ul d-flex flex-column align-left'>
                  <li><img src="/images/readingtype.svg" alt="" />
                    {details?.topics?.map((ele, index) => (
                      <span>
                        {index !== 0 && ", "}
                        {ele.charAt(0).toUpperCase() + ele.slice(1)}
                      </span>
                    ))}
                  </li>
                  <li><img src="/images/abilities-icon.svg" alt="" />
                    {details?.abilities?.map((ele, index) => (
                      <span>
                        {index !== 0 && ", "}
                        {ele.charAt(0).toUpperCase() + ele.slice(1)}
                      </span>
                    ))}
                  </li>
                  <li className='d-flex flex-wrap'><img src="/images/type_icon.svg" alt="" />
                    {details?.styles?.map((ele, index) => (
                      <span>
                        {index !== 0 && ", "}
                        {ele.charAt(0).toUpperCase() + ele.slice(1)}
                      </span>
                    ))}
                  </li>
                </ul>
                <p>{`${details?.bio}`}</p>
                <h3>Psychic Tools</h3>
                <ul className='psychic_details2_ul2'>
                  {/* <li><img src="/images/tarotcards.svg" alt="" /> Tarot Cards</li>
                  <li><img src="/images/pendulum.svg" alt="" /> Pendulum</li>
                  <li><img src="/images/astrology.svg" alt="" /> Astrology</li>
                  <li><img src="/images/crystals2-icon.svg" alt="" /> Crystals</li>
                  <li><img src="/images/iching_icon.svg" alt="" /> I-Ching</li>
                  <li><img src="/images/vector-icon.svg" alt="" /> Oracle Cards</li>
                  <li><img src="/images/numerology-icon.svg" alt="" /> Numerology</li>
                  <li><img src="/images/vector_icon1.svg" alt="" /> No Tools (Tool-Free)</li> */}
                  {
                    details?.specialities?.map((ele)=> {
                      return(
                        <li><img src="/images/tarotcards.svg" alt="" />{ele}</li>
                      )
                    })
                  }
                </ul>
                <div className='btn_profesa'>
                  <a href=''>Get Profesa+ and Save</a></div>
              </div>
            </div>
            <div className='col-12 col-md-5'>
              <PsychicCard
              actualrate={details?.actual_rate}
              reviewcount={details?.review_count}
              actualrating={details?.average_rating}
              name={details?.first_name}
              picture={details?.picture}
              id={details?.id}
              timezone={details?.timezone}
              type={queryParams.get('type')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index