import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/UI/Navbar.jsx";
import CircularProgress from "@mui/joy/CircularProgress";

function App() {

  return (
      <>
          <Navbar/>
          <Suspense fallback={<CircularProgress color="neutral" size="sm" type="soft"/> }>
              <Outlet />
          </Suspense>
      </>
  )
}

export default App;
