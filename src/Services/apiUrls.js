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