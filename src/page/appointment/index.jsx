import styles from "./appoinment.module.css";
import Back from "../../Resources/icons/Back";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Appointment = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const queryData = {
    type: queryParams.get('type'),
    timezone: queryParams.get('timezone'),
    name: queryParams.get('name'),
    price: queryParams.get('price'),
    picture: queryParams.get('picture'),
  }
  

  const appointmentNowData = {
    image: "",
    pageHeading: "The Time Is Now",
  }

  const appointmentFutureData = {
    image: "",
    pageHeading: "The Future Is Bright.",
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <main className={styles.main}>
        <div className={"container-fluid p-0 "}>
          <div>
            <div className={styles.appointmentHeader}>
              <span>
                <Back /> &nbsp;Back to Schedule name Now
              </span>
            </div>

            <div className={styles.backgroundPadding}>
              <div className={location.pathname.includes('/appointment-future') ? styles.nowBG : styles.futureBG}>
                <div className={styles.BGContent}>
                  <h1>{location.pathname.includes('/appointment-future') ? appointmentFutureData?.pageHeading : appointmentNowData?.pageHeading}</h1>
                  <p className="mb-0">Book an appointment with {queryData.name} now.</p>
                  <span className={styles.bookTimeZone}>
                    {queryData.name}'s Timezone : {queryData.timezone}
                  </span>
                </div>
                {width > 1024 ? (
                  <div className={styles.BAContainer}>
                    {
                      location.pathname.includes('/appointment-future') ?
                      <BookAppointment sceduleType="future" queryData={queryData} />
                      :
                      <BookAppointment sceduleType="now" queryData={queryData} />
                    }
                  </div>
                ) : null}
              </div>
            </div>
            {width <= 1024 ? (
              <div className={styles.BAContainer}>
                <BookAppointment sceduleType="now" />
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointment;
