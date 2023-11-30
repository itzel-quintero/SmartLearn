import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/home/Home";
import Mas from "./views/mas/Mas";
import Maestros from "./views/maestros/Maestros";
import Alumnos from "./views/alumnos/Alumnos";
import RegistroM from "./views/registrom/RegistroM";
import RegistroA from "./views/registroA/RegistroA";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      onError: <div>Error</div>,
    },
    {
      path: "/mas",
      element: <Mas />,
      onError: <div>Error</div>,
    },
    {
      path: "/maestros",
      element: <Maestros />,
      onError: <div>Error</div>,
    },
    {
      path: "/alumnos",
      element: <Alumnos />,
      onError: <div>Error</div>,
    },
    {
      path: "/registrom",
      element: <RegistroM />,
      onError: <div>Error</div>,
    },
    {
      path: "/registroa",
      element: <RegistroA />,
      onError: <div>Error</div>,
    },
  ]);
  return <RouterProvider router={router}/>; 
};

export default App;
