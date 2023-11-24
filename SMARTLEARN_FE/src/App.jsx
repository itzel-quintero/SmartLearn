import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Maestros from "./views/maestros/Maestros";
import Mas from "./views/mas/Mas";
import Registro from "./views/registro/Registro";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/mas",
      element: <Mas/>,
      onError: <div>Error</div>,
    },
    {
      path: "/registro",
      element: <Registro/>,
      onError: <div>Error</div>,
    },
  ]);
  return <RouterProvider router={router}/>; 
};

export default App;
