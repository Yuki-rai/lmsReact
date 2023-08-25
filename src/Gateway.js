import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Faculty from "./Pages/Faculty/Faculty";
import CreateFaculty from "./Pages/Faculty/Create";
import Student from "./Pages/Student/Student";
import Book from "./Pages/Book/Book";
import Issue from "./Pages/Issue/Issue";
import CreateStudent from "./Pages/Student/Create";
import CreateIssue from "./Pages/Issue/Create";
import CreateBook from "./Pages/Book/Create";
import Login from "./Pages/auth/login";

export default function Gateway() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Faculty" element={<Faculty />} />
            <Route exact path="/Faculty/Create" element={<CreateFaculty />} />
            {/* <Route exact path="/Student/Create" element={<CreateStudent />} />
            <Route exact path="/Student" element={<Student />} />
            <Route exact path="/Book" element={<Book />} />
            <Route exact path="/Book/Create" element={<CreateBook />} />
            <Route exact path="/Issue" element={<Issue />} /> */}
            {/* <Route exact path="/Issue/Create" element={<CreateIssue />} /> */}
            <Route exact path="/*" element={<div> Nothing </div>} />
        </Routes>
    )
}