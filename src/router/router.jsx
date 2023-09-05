import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Update from "../Update/Update";
import Container from "../Home/Container";
import AddCoffee from "../AddCoffee/AddCoffee";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/all-coffee"),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: async({params}) => fetch(`http://localhost:3000/view/${params.id}`),
      },
      {
        path: "/add",
        element: <AddCoffee />,
      },
    ],
  },
]);