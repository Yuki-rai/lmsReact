import { facultyApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const facultyService = async ()=>{
    let response = await facultyApi(
        apiUrls.faculty.faculty.method,
        apiUrls.faculty.faculty.url
    );
    return response;
};

export const createFacultyService = async (data)=>{
    let response = await facultyApi(
        apiUrls.faculty.createFaculty.method,
        apiUrls.faculty.createFaculty.url,
        data
    );
    return response;
}

export const editFacultyService = async(data)=>{
    let response = await facultyApi(
        apiUrls.faculty.editFaculty.method,
        apiUrls.faculty.editFaculty.url ,
        data
    );
    return response;
}

export const deleteFacultyService = async(id)=>{
    debugger
    let response = await facultyApi(
        apiUrls.faculty.deleteFaculty.method,
        apiUrls.faculty.deleteFaculty.url +"?id="+id,
    );
    return response

}

export const facultyByIdService = async (id)=>{
    let response = await facultyApi(
        apiUrls.faculty.facultyById.method,
        apiUrls.faculty.facultyById.url+"?id="+id ,
        
    )
    return response
}