import { facultyApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const faculty = async ()=>{
    let response = await facultyApi(
        apiUrls.faculty.faculty.method,
        apiUrls.faculty.faculty.url
    );
    return response;
};

export const CreateFaculty = async (data)=>{
    let response = await facultyApi(
        apiUrls.method.CreateFaculty.method,
        apiUrls.faculty.CreateFaculty.url,
        data
    );
    return response;

}