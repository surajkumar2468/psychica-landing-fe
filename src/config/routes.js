import Appointment from "../page/appointment";
import Landing from "../page/landing";
import ProfessionalLists from "../page/professionallists";
import PsychicDetails from "../page/psychicDetails";
import Psychictypes from "../page/psychicstypes";
import ScheduleAppointment from "../page/scheduleappointment";
import ForPsychics from "../page/forpsychics"
import TheDiffrence from "../page/thediffrence"
export const routes = [
  {
    id: "landingPageRoute",
    path: "/",
    component: <Landing />,
  },
  {
    id: "psychicType",
    path: "/psychictype",
    component: <Psychictypes />,
  },
  {
    id: "professionallists",
    path: "/professionallists",
    component: <ProfessionalLists />,
  },
  {
    id: "psychicdetails",
    path: "/psychicdetails/:id",
    component: <PsychicDetails />,
  },
  {
    id: "appointment-now",
    path: "/appointment-now/:id",
    component: <Appointment />,
  },
  {
    id: "appointment-future",
    path: "/appointment-future/:id",
    component: <Appointment />,
  },
  {
    id: "ScheduleAppointment",
    path: "/scheduleappointment",
    component: <ScheduleAppointment />,
  },
  {
    id:'for-Psychics',
    path:"/forpsychics",
    component: <ForPsychics/>
  },
  {
    id:'the-diffrence',
    path:"/thediffrence",
    component: <TheDiffrence/>
  },
];
