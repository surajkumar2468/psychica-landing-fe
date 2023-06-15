import styles from "./bookappointment.module.css";
import Meeting from "../../Resources/icons/Meeting";
import Calender from "../../Resources/icons/Calender";
import AppVideo from "../../Resources/icons/AppVideo";
import Message from "../../Resources/icons/Message";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useRouter } from "next/router";
import { useRef } from "react";
import classNames from "classnames";
import moment from "moment";
import {
  getNthDate,
  convertToCurrentTimeZone,
  convertUnixToHumanReadableTime,
} from "../../utils/common";
import { ToastContainer, toast } from "react-toastify";
import { API_URLS } from "../../utils/API_URLS";
import axiosInstance from "../../config/axiosinstance";
import SearchIcon from "../../Resources/icons/SearchIcon";
import { useLocation } from "react-router-dom";

const BookAppointment = ({ sceduleType }) => {
  const currELe = useRef(null);
  // const router = useRouter();
  const location = useLocation();
  const { id, type, timezone, name, price, picture } = new URLSearchParams(
    location.search
  );
  const [slots, setSlot] = useState([]);
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

  const [loader, setLoader] = useState(false);

  const [meeting, setMeeting] = useState({
    id: 1,
    label: "...",
  });
  const [start, setStart] = useState({
    id: "",
    label: "...",
  });
  const [end, setEnd] = useState({
    id: "",
    label: "...",
  });



  const [schedule, setSchedule] = useState({
    professional: "",
    meeting_type: "",
    start_date: new Date(),
    start_time: new Date(),
    end_time: new Date(),
    schedule_type: sceduleType,
  });

  useEffect(() => {
    setSchedule({ ...schedule, professional: id });
  }, []);
  useEffect(() => {
    if (id && timezone) {
      getSlots();
    }
  }, [schedule?.start_date, id, timezone]);

  const handleAPIcall = () => {
    const params = { ...schedule };
    if (id && schedule?.meeting_type && schedule?.slotId) {
      setLoader(true);
      axiosInstance
        .post(`${API_URLS.checkSlot}${params.slotId}`)
        .then((res) => {
          setLoader(false);
          // router.push(
          //   `/client/payment/?id=${id}&type=${type}&schedule_type=${sceduleType}&picture=${picture}&appointment_type=${schedule.meeting_type}&price=${price}&name=${name}&date=${schedule.start_time}&start_time=${schedule.start_time}&end_time=${schedule.end_time}&slotId=${params.slotId}&duration=${params.duration}`
          // );
        })
        .catch((err) => {
          setLoader(false);
          toast.error(err?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } else {
      setLoader(false);
      toast.error("All fields must be selected", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleCalenderOpen = () => {
    setSchedule({ ...schedule });
    setOpen(!open);
  };

  const handleChange = (e) => {
    setOpen(!open);
    setStartDate(e);
    setEnd("");
    setStart("");

    setSchedule({
      ...schedule,
      start_time: "",
      slotId: "",
      duration: "",
      end_time: "",
    });
    schedule?.schedule_type !== "now" &&
      setSchedule({ ...schedule, start_date: e });
  };

  const getSlots = async () => {
    const dataValue = new Date(schedule?.start_date);
    axiosInstance
      .get(
        `${API_URLS.availableSlots}${id}?start_date=${convertToCurrentTimeZone(
          dataValue.toISOString()
        )}&timezone=${timezone}`
      )
      .then((res) => {
        setSlot(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleStartTime = (ele) => {
    setSchedule({
      ...schedule,
      slotId: ele.id,
      duration: ele.duration,
      start_time: ele.start_date,
      end_time: ele.end_date,
    });
    setStart({
      id: ele,
      label: convertUnixToHumanReadableTime(ele.start_date),
    });
    setEnd({
      id: ele,
      label: convertUnixToHumanReadableTime(ele.end_date),
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={`${styles.container}`}>
        <div className={`${styles.time} d-flex gap-5`}>
          <div
            className={`${
              // router.pathname === `/client/appointment-future/[id]`
              styles.active
              // : ""
            }`}
          >
            <a
              className={styles.FNLink}
              href={`/client/appointment-future/${id}?&picture=${picture}&price=${price}&type=${
                type ? type : ""
              }&name=${name}&timezone=${timezone}`}
            >
              Future
            </a>
          </div>
          <div
            className={`${
              // router.pathname === `/client/appointment-now/[id]`
              // ?
              styles.active
              // : ""
            }`}
          >
            <a
              className={styles.FNLink}
              href={`/client/appointment-now/${id}?&picture=${picture}&price=${price}&type=${
                type ? type : ""
              }&name=${name}&timezone=${timezone}`}
            >
              Today
            </a>
          </div>
        </div>
        <hr className={styles.hrLine} />
        <div
          className={`d-flex justify-content-between flex-wrap ${styles.secContainer}`}
        >
          <div className={styles.sectionWrapper1}>
            <div
              className={"d-flex gap-3 dropdown-toggle " + styles.section}
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
              aria-expanded="false"
            >
              <span>
                <Meeting />
              </span>
              <div className="d-flex flex-column ">
                <h5>Meeting Type</h5>
                <span>{meeting.label}</span>
              </div>
            </div>

            <ul
              aria-labelledby="dropdownMenuButton1"
              className={"dropdown-menu " + styles.DDList}
            >
              <li
                onClick={() => {
                  setMeeting({ ...meeting, label: "Computer Audio" });
                  setSchedule({ ...schedule, meeting_type: "audio" });
                }}
              >
                <span className={styles.iconContainer}>
                  <Message />
                </span>
                <span className={styles.listItem}>
                  Appointment via Computer Audio
                </span>
              </li>
              <li
                onClick={() => {
                  setMeeting({ ...meeting, label: "Video" });
                  setSchedule({ ...schedule, meeting_type: "video" });
                }}
              >
                <span className={styles.iconContainer}>
                  <AppVideo />
                </span>
                <span className={styles.listItem}>Appointment via Video</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.sectionWrapper1}`}>
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              monthsShown={width <= 1024 ? 1 : 2}
              calendarClassName="book-appointment-date"
              wrapperClassName={` ${styles.calendarWrapper}`}
              popperPlacement="top"
              // disabled={schedule?.schedule_type === "now"}
              minDate={moment().toDate()}
              customInput={
                <div className={` ${styles.calendarWidth}`}>
                  <div
                    className={"d-flex gap-3 " + styles.section}
                    onClick={() => {
                      handleCalenderOpen();
                    }}
                  >
                    <span>
                      <Calender color="#B1B5C3" />
                    </span>
                    <div className="d-flex flex-column ">
                      <h5>Date</h5>
                      <span>
                        {schedule?.schedule_type === "now"
                          ? "today"
                          : getNthDate(startDate)}
                      </span>
                    </div>
                  </div>
                </div>
              }
              ref={currELe}
            />
          </div>

          <div className={styles.sectionWrapper2}>
            <div
              className={` d-flex gap-3 ${slots?.length <= 0 && "disabled"} ${
                schedule?.schedule_type !== "now" ? "dropdown-toggle" : ""
              } 
                ${styles.section}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                <Calender color="#B1B5C3" />
              </span>
              <div className="d-flex flex-column ">
                <h5>Start Time</h5>
                <span>
                  {slots?.length <= 0 ? (
                    <span className="error-text">No Slots available</span>
                  ) : (
                    start.label
                  )}
                </span>
              </div>
            </div>
            <ul className={`dropdown-menu  ${styles.DDmintList}`}>
              {slots?.length > 0 &&
                slots?.map((ele, idx) => {
                  return (
                    <li
                      onClick={() => handleStartTime(ele)}
                      className={`${
                        start.id === ele ? styles.selectedListItem : ""
                      } mb-2`}
                      key={idx}
                    >
                      <span className={`${styles.listItem}`}>
                        {convertUnixToHumanReadableTime(ele.start_date)}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className={styles.sectionWrapper2}>
            <div
              className={classNames(
                "d-flex gap-3",
                !start.id && "disabled",
                styles.section
              )}
            >
              <span>
                <Calender color="#B1B5C3" />
              </span>
              <div className="d-flex flex-column ">
                <h5>End Time</h5>
                <span>{end.label}</span>
              </div>
            </div>

            {/* <ul className={`dropdown-menu  ${styles.DDmintList}`}>
              {slots?.length > 0 && slots.map((ele, idx) => {
                return (
                  <li
                    onClick={() => (
                    )}
                    key={idx}
                    className={`${
                      end.id === ele ? styles.selectedListItem : ""
                    } mb-2`}
                  >
                    <span className={styles.listItem}>
                      {convertUnixToHumanReadableTime(ele.end_date)}
                    </span>
                  </li>
                );
              })}
            </ul> */}
          </div>
          {width > 1024 ? (
            <div className={styles.sectionWrapper3} onClick={handleAPIcall}>
              {loader ? (
                <span
                  className={`spinner-border me-2 spinner-border-sm ${styles.SearchIcon}`}
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                <span className={styles.SearchIcon}>
                  <SearchIcon />
                </span>
              )}
            </div>
          ) : null}
        </div>
        {width <= 1024 ? (
          <div onClick={handleAPIcall} className={styles.outside}>
            {loader ? (
              <span
                className={`spinner-border me-2 spinner-border-sm ${styles.SearchIcon}`}
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span className={styles.SearchIcon}>
                <SearchIcon />
              </span>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BookAppointment;
