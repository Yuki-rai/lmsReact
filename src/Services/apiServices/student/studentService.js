import { studentApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const studentService = async ()=>{
    let response = await studentApi(
        apiUrls.student.student.method,
        apiUrls.student.student.url
    );
    return response;
};

export const createStudentService = async (data)=>{
    let response = await studentApi(
        apiUrls.student.createStudent.method,
        apiUrls.student.createStudent.url,
        data
    );
    return response;

}