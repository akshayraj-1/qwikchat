import "./main.scss";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Room from "./pages/Room.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/r/:roomId" element={<Room/>}/>
            <Route path="/room/:roomId" element={<Room/>}/>
            <Route path="*" element={<Home/>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
