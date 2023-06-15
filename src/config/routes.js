import Appointment from "../page/appointment";
import Landing from "../page/landing";
import ProfessionalLists from "../page/professionallists";
import PsychicDetails from "../page/psychicDetails";
import Psychictypes from "../page/psychicstypes";

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
    path: "/psychicdetails",
    component: <PsychicDetails />,
  },
  {
    id: "appointment-now",
    path: "/appointment-now",
    component: <Appointment />,
  },
  {
    id: "appointment-future",
    path: "/appointment-future",
    component: <Appointment />,
  },
];
