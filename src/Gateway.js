import { Route, Routes } from "react-router-dom";


import Login from "./Pages/auth/login";
import SignUp from "./Pages/auth/signUp";
import { PrivateRoute } from "./util/Utility";
import UserList from "./Pages/Admin/UserList/UserList"
import CreateUser from "./Pages/Admin/UserList/Create"
import CourseIndex from "./Pages/Admin/Course/CourseIndex";
import CreateCourse from "./Pages/Admin/Course/Create";
import EditCourse from "./Pages/Admin/Course/Edit";
import StudentIndex from "./Pages/Admin/Student/StudentIndex";
import CreateStudent from "./Pages/Admin/Student/Create";
import EditStudent from "./Pages/Admin/Student/Edit";
import Category from "./Pages/Admin/Category/Category";
import CreateCategory from "./Pages/Admin/Category/Create";
import EditCategory from "./Pages/Admin/Category/Edit";
import Book from "./Pages/Admin/Book/Book";
import CreateBook from "./Pages/Admin/Book/Create";
import EditBook from "./Pages/Admin/Book/Edit";
import CreateTransaction from "./Pages/Admin/Transaction/Create";
import Transaction from "./Pages/Admin/Transaction/TransactionIndex";
import EditTransaction from "./Pages/Admin/Transaction/Edit";
import Home from "./Pages/Admin/Home/Home";


export default function Gateway() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                {/* SetUser */}
                <Route exact path="/UserList" element={<UserList />} />
                <Route exact path="/UserList/Create" element={<CreateUser />} />

                {/*  */}
                <Route exact path="/Course" element={<CourseIndex />} />
                <Route exact path="/Course/Create" element={<CreateCourse />} />
                <Route exact path="/Course/Edit/:id" element={<EditCourse />} />

                {/* Student */}
                <Route exact path="/Student" element={<StudentIndex />} />
                <Route exact path="/Student/Create" element={<CreateStudent />} />
                <Route exact path="/Student/Edit/:id" element={<EditStudent />} />

                {/* Category */}
                <Route exact path="/Category" element={<Category />} />
                <Route exact path="/Category/Create" element={<CreateCategory />} />
                <Route exact path="/Category/Edit/:id" element={<EditCategory />} />

                {/* Book */}
                <Route exact path="/Book" element={<Book />} />
                <Route exact path="/Book/Create" element={<CreateBook/>} />
                <Route exact path="/Book/Edit/:id" element={<EditBook />} />

                {/* Transaction */}
                <Route exact path="/Transaction" element={<Transaction />} />
                <Route exact path="/Transaction/Create" element={<CreateTransaction />} />
                <Route exact path="/Transaction/Edit/:id" element={<EditTransaction />} />

                <Route exact path="/*" element={<div> Nothing </div>} />
            </Route>
        </Routes>
    )
}