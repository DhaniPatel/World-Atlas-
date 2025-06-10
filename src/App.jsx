import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";
import { Headers } from "./components/UI/Headers"; 
import { Footers } from "./components/UI/Footers";
import { CountryDetails } from "./components/Layout/CountryDetails";
const router =createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [{
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "country",
    element: <Country/>,
  },
  {
        path: "country/:id",
        element: <CountryDetails />,
      },
]
  }
  
]);

const App=()=>{
  return <RouterProvider router={router}></RouterProvider>
}

export default App;