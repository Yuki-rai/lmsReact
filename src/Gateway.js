import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Faculty from "./Pages/Faculty/Faculty";
import CreateFaculty from "./Pages/Faculty/Create";

import Login from "./Pages/auth/Login";
import { PrivateRoute } from "./util/Utility";
import Category from "./Pages/Category/Category";

export default function Gateway() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route exact path="/Faculty" element={<Faculty />} />
                <Route exact path="/Faculty/Create" element={<CreateFaculty />} />
                <Route exact path="/Category" element={<Category />} />
                <Route exact path="/*" element={<div> Nothing </div>} />
            </Route>
        </Routes>
    )
}