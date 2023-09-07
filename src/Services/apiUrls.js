const apiUrls = {
    auth:{
        loginUser:{
            method:"POST",
            url:"/Login"

        }
    },


    faculty:{
        faculty:{
            method:"GET",
            url:"/GetAllFaculty",
        },
        createFaculty:{
            method:"POST",
            url:"/CreateFaculty"
        }
    },
    issueBook:{
        issueBook:{
            method:"GET",
            url:"/GetAllIssueBook",
        },
        createIssueBook:{
            method:"POST",
            url:"/CreateIssueBook"
        }
    },

    book:{
        book:{
            method:"GET",
            url:"/GetAllBook",
        },
        createBook:{
            method:"POST",
            url:"/CreateBook"
        }
    },

    student:{
        student:{
            method:"GET",
            url:"/GetAllStudent",
        },
        createStudent:{
            method:"POST",
            url:"/CreateStudent"
        }
    },

    category:{
        category:{
            method:"GET",
            url:"/GetAllCategory",
        },
        createCategory:{
            method:"POST",
            url:"/CreateCategory"
        },
    },
    common:{
        gender:{
            gender:{
                method:"GET",
                url:"/GetGender"
            }
        }
    }
   
}
export default apiUrls