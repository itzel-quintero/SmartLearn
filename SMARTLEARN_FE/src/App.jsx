import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Maestros from "./views/maestros/Maestros";
import MenuItems from "./components/navbar/MenuItems";
import More from "./views/more/More";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><MenuItems /><Home /></>,
      onError: <div>Error</div>,
    },
    {
      path: "/login",
      element: <Login />,
      onError: <div>Error</div>,
    },
    {
      path: "/maestros",
      element: <Maestros />,
      onError: <div>Error</div>,
    },
    {
      path: "/more",
      element: <More/>,
      onError: <div>Error</div>,
    },
  ]);
  return <RouterProvider router={router}/>; 
};

export default App;
