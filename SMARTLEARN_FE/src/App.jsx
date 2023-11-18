import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/login/Login";

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
  ]);
  return <RouterProvider router={router}/>; 
};

export default App;
