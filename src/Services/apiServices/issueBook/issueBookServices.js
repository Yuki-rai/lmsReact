import { issueBookApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const issueBookService = async ()=>{
    let response = await issueBookApi(
        apiUrls.issueBook.issueBook.method,
        apiUrls.issueBook.issueBook.url
    );
    return response;
};

export const createIssueBookService = async (data)=>{
    let response = await issueBookApi(
        apiUrls.issueBook.createIssueBookBook.method,
        apiUrls.issueBook.createIssueBookBook.url,
        data
    );
    return response;

}