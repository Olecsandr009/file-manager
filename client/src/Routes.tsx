import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Home from "./components/screens/home/Home";
import Auth from "./components/screens/auth/Auth";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route path="" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
    </Route>
))