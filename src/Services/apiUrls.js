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
    }    ,
    category:{
        category:{
            method:"GET",
            url:"/GetAllCategory",
        }
    }    ,
    student:{
        student:{
            method:"GET",
            url:"/GetAllStudent"
        }
    }
}
export default apiUrls