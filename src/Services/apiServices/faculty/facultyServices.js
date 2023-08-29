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