import Landing from "../page/landing";
import ProfessionalLists from "../page/professionallists";
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
];
