const apiUrls = {
    auth: {
        loginUser: {
            method: "POST",
            url: "/Login"

        }
    },


    faculty: {
        faculty: {
            method: "GET",
            url: "/GetAllFaculty",
        },
        createFaculty: {
            method: "POST",
            url: "/CreateFaculty"
        },
        editFaculty: {
            method: "PUT",
            url: "/EditFaculty"
        },
        deleteFaculty: {
            method: "DELETE",
            url: "/DeleteFaculty"
        },
        facultyById: {
            method: "GET",
            url: "/GetFacultyById"
        }
    },
    issueBook: {
        issueBook: {
            method: "GET",
            url: "/GetAllIssueBook",
        },
        createIssueBook: {
            method: "POST",
            url: "/CreateIssueBook"
        },
        issueBookById: {
            method: "GET",
            url: "/GetIssueBookById/"
        },
        editIssueBook: {
            method: "PUT",
            url: "/EditIssueBook"
        },
        returnIssuedbook: {
            method: "POST",
            url: "/ReturnIssuedBook"
        },
        deleteIssueBook: {
            method: "DELETE",
            url: "/DeleteIssueBook"
        }
    },

    book: {
        book: {
            method: "GET",
            url: "/GetAllBook",
        },
        createBook: {
            method: "POST",
            url: "/CreateBook"
        },
        editBook: {
            method: "PUT",
            url: "/EditBook"
        },
        deleteBook: {
            method: "DELETE",
            url: "/DeleteBook"
        },
        bookById: {
            method: "GET",
            url: "/GetBookById"
        }
    },

    student: {
        student: {
            method: "GET",
            url: "/GetAllStudent",
        },
        createStudent: {
            method: "POST",
            url: "/CreateStudent"
        },
        editStudent: {
            method: "PUT",
            url: "/EditStudent"
        },
        deleteStudent: {
            method: "DELETE",
            url: "/DeleteStudent"
        },
        studentById: {
            method: "GET",
            url: "/GetStudentById"
        }
    },

    category: {
        category: {
            method: "GET",
            url: "/GetAllCategory",
        },
        createCategory: {
            method: "POST",
            url: "/CreateCategory"
        },
        editCategory: {
            method: "PUT",
            url: "/EditCategory"
        },
        deleteCategory: {
            method: "DELETE",
            url: "/DeleteCategory"
        },
        categoryById: {
            method: "GET",
            url: "/GetCategoryById"
        }
    },
    common: {
        gender: {
            gender: {
                method: "GET",
                url: "/GetGender"
            }
        }
    },
    dashboard: {
        dashboard: {
            method: "GET",
            url: "/GetDashboardData"
        }
    }

}
export default apiUrls