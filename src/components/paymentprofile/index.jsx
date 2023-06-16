import styles from "./paymentprofile.module.css";
import Calender from "../../Resources/icons/Calender";
import Contact from "../../Resources//icons/Contact";
import Time from "../../Resources//icons/Time";
import {
  convertUnixToHumanReadableDate,
  convertUnixToHumanReadableTime,
} from "../../utils/common";
import { useLocation } from "react-router-dom";
import { getQueryParamsAsObject } from "../../utils/common";

const PaymentProfile = ({ profRateInfo }) => {
  const location = useLocation();
  const {
    id,
    type,
    price,
    picture,
    name,
    date,
    start_time,
    timezone,
    end_time,
    slotId,
    duration,
  } = getQueryParamsAsObject(location.search);

  return (
    <div className={styles.profileSec}>
      <div className={"d-flex rounded-sm " + styles.part1}>
        <img src={`https://${picture}`} />
        <div className="d-flex flex-column justify-content-center gap-2">
          <p>Appointment w/ {name}</p>
          <hr />
          {/* <div className="d-flex gap-2">
            <Star />
            <p>{}</p>
            <span>(256 reviews)</span>
          </div> */}
        </div>
      </div>

      <div className={`${styles.part2} d-flex flex-wrap`}>
        <div className={`${styles.borderRight}  ${styles.sec}  d-flex gap-3`}>
          <span>
            <Calender color="#777E90" />
          </span>
          <div>
            <p>Appointment Date</p>
            <h6>{convertUnixToHumanReadableDate(start_time, timezone)}</h6>
          </div>
        </div>
        <div className={`${styles.sec}  d-flex gap-3`}>
          <span>
            <Time />
          </span>
          <div>
            <p>Appointment Time</p>
            <h6>{convertUnixToHumanReadableTime(start_time)}</h6>
          </div>
        </div>
        <div className={`${styles.sec}  d-flex gap-3`}>
          <span>
            <Contact color="#777E90" />
          </span>
          <div>
            <p>Duration</p>
            <h6>{duration} Min</h6>
          </div>
        </div>
      </div>

      <div className={styles.part3}>
        <h1>Appointment details</h1>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex px-2 justify-content-between">
            <p>{`$${price} x ${duration} Min`}</p>
            <h6>${profRateInfo?.rate_duration}</h6>
          </div>
          <div className="d-flex px-2 justify-content-between">
            <p>{profRateInfo?.platfrom_heading || "Platform Fee"}</p>
            <h6>${profRateInfo?.platform_fee}</h6>
          </div>
          <div className="d-flex px-2 justify-content-between">
            <p>{`${profRateInfo?.discount_heading}`}</p>
            <h6>{profRateInfo?.discount_value}</h6>
          </div>

          <div className="d-flex px-2 justify-content-between">
            <p>{`${profRateInfo?.processing_heading}`}</p>
            <h6>{profRateInfo?.processing_amount}</h6>
          </div>
          <div
            className={
              "d-flex justify-content-between align-items-center " +
              styles.total
            }
          >
            <h6>Total payable amount</h6>
            <h6>${profRateInfo?.total_amount}</h6>
          </div>
        </div>

        <div
          className={
            "d-flex align-items-center justify-content-center " +
            styles.bottomText
          }
        >
          {/* <Dollar /> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentProfile;
