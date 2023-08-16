import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Author from "./Pages/Author/Author";
import CreateAuthor from "./Pages/Author/Create";
import Student from "./Pages/Student/Student";
import Book from "./Pages/Book/Book";
import Issue from "./Pages/Issue/Issue";
import CreateStudent from "./Pages/Student/Create";
import CreateIssue from "./Pages/Issue/Create";
import Login from "./Pages/Login";
import CreateBook from "./Pages/Book/Create";

export default function Gateway() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Author" element={<Author />} />
            <Route exact path="/Author/Create" element={<CreateAuthor />} />
            <Route exact path="/Student/Create" element={<CreateStudent />} />
            <Route exact path="/Student" element={<Student />} />
            <Route exact path="/Book" element={<Book />} />
            <Route exact path="/Book/Create" element={<CreateBook />} />
            <Route exact path="/Issue" element={<Issue />} />
            {/* <Route exact path="/Issue/Create" element={<CreateIssue />} /> */}
            <Route exact path="Login" element={<Login />} />
            <Route exact path="/*" element={<div> Nothing </div>} />
        </Routes>
    )
}