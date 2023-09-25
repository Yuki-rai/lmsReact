import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Faculty from "./Pages/Faculty/Faculty";
import CreateFaculty from "./Pages/Faculty/Create";

import Login from "./Pages/auth/login";
import { PrivateRoute } from "./util/Utility";
import Category from "./Pages/Category/Category";
import CreateCategory from "./Pages/Category/Create";
import Student from "./Pages/Student/Student";
import CreateStudent from "./Pages/Student/Create";
import CreateBook from "./Pages/Book/Create";
import Book from "./Pages/Book/Book";
import IssueBook from "./Pages/IssueBook/IssueBook";
import CreateIssueBook from "./Pages/IssueBook/Create";
import EditIssueBook from "./Pages/IssueBook/Edit";
import EditFaculty from "./Pages/Faculty/Edit";
import EditStudent from "./Pages/Student/Edit";
import EditBook from "./Pages/Book/Edit";
import EditCategory from "./Pages/Category/Edit";


export default function Gateway() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                {/* Faculty */}
                <Route exact path="/Faculty" element={<Faculty />} />
                <Route exact path="/Faculty/Create" element={<CreateFaculty />} />
                <Route exact path="/Faculty/Edit/:id" element={<EditFaculty />} />

                {/* Student */}
                <Route exact path="/Student" element={<Student />} />
                <Route exact path="/Student/Create" element={<CreateStudent />} />
                <Route exact path="/Student/Edit/:id" element={<EditStudent />} />

                {/* Category */}
                <Route exact path="/Category" element={<Category />} />
                <Route exact path="/Category/Create" element={<CreateCategory />} />
                <Route exact path="/Category/Edit/:id" element={<EditCategory />} />

                {/* Book */}
                <Route exact path="/Book" element={<Book />} />
                <Route exact path="/Book/Create" element={<CreateBook />} />
                <Route exact path="/Book/Edit/:id" element={<EditBook />} />

                {/* IssueBook */}
                <Route exact path="/IssueBook" element={<IssueBook />} />
                <Route exact path="/IssueBook/Create" element={<CreateIssueBook />} />
                <Route exact path="/IssueBook/Edit/:id" element={<EditIssueBook />} />

                <Route exact path="/*" element={<div> Nothing </div>} />
            </Route>
        </Routes>
    )
}