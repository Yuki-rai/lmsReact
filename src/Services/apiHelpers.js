import axios from "axios";
import {store} from '../redux/store'
const baseUrl = "https://localhost:7098/api";

export const urls={
    facultyUrl:`${baseUrl}/Admin/Faculty`,
    studentUrl:`${baseUrl}/Admin/Student`,
    categoryUrl:`${baseUrl}/Admin/Category`,
    bookUrl:`${baseUrl}/Admin/Book`,
    issueBookUrl:`${baseUrl}/Admin/IssueBook`,
}

export const authApi = async (method,url,data)=>{
    let response = await axios({
        method,
        url:`${baseUrl}${url}`,
        data
    });
    return response.data;
}

export const facultyApi = async (method,url,data)=>{
    const token = store.getState();
    let response = await axios({
        method,
        url:`${urls.facultyUrl}${url}`,
        data,
        headers:{
            Authorization:`Bearer ${token.userDetail.user?.data?.token}`,
        },
    });
    return response.data;
}

export const issueBookApi = async (method,url,data)=>{
    const token = store.getState();
    let response = await axios({
        method,
        url:`${urls.issueBookUrl}${url}`,
        data,
        headers:{
            Authorization:`Bearer ${token.userDetail.user?.data?.token}`,
        },
    });
    return response.data;
}


export const bookApi = async (method,url,data)=>{
    const token = store.getState();
    let response = await axios({
        method,
        url:`${urls.bookUrl}${url}`,
        data,
        headers:{
            Authorization:`Bearer ${token.userDetail.user?.data?.token}`,
        },
    });
    return response.data;
}

export const studentApi = async (method,url,data)=>{
    const token = store.getState();
    let response = await axios({
        method,
        url:`${urls.studentUrl}${url}`,
        data,
        headers:{
            Authorization:`Bearer ${token.userDetail.user?.data?.token}`,
        },
    });
    return response.data;
}


export const categoryApi = async (method,url,data)=>{
    const token = store.getState();
    let response = await axios({
        method,
        url:`${urls.categoryUrl}${url}`,
        data,
        headers:{
            Authorization:`Bearer ${token.userDetail.user?.data?.token}`,
        },
    });
    return response.data;
}