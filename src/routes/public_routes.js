import BasicLayout from "../layout/basic_layout";
import Contents from "../pages/root";
import Watch from "../pages/watch";

const publicRoutes = {
  path: "/",
  element: <BasicLayout />,
  children: [
    {
      path: "/",
      element: <Contents />,
    },
    {
      path: "/watch",
      element: <Watch />,
    },
  ],
};

export default publicRoutes;
