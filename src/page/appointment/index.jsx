import styles from "./appoinment.module.css";
import Back from "../../Resources/icons/Back";
import BookAppointment from "../../components/bookAppointment/BookAppointment";
import { useState, useEffect } from "react";

const Appointment = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

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
              <div className={styles.nowBG}>
                <div className={styles.BGContent}>
                  <h1>The Time Is Now.</h1>
                  <p className="mb-0">Book an appointment with name now.</p>
                  <span className={styles.bookTimeZone}>
                    Name's Timezone : timezone
                  </span>
                </div>
                {width > 1024 ? (
                  <div className={styles.BAContainer}>
                    <BookAppointment sceduleType="now" />
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
