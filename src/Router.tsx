import { createBrowserRouter } from "react-router-dom";
import List from "./meeting/List";

const router = createBrowserRouter([
  {
    path: "/meeting",
    element: <List />,
  },
]);

export default router;
