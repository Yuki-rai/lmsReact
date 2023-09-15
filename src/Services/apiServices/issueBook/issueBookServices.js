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
        apiUrls.issueBook.createIssueBook.method,
        apiUrls.issueBook.createIssueBook.url,
        data
    );
    return response;
}

export const returnIssuedBookService = async (id,status)=>{
    let response = await issueBookApi(
        apiUrls.issueBook.returnIssuedbook.method,
        apiUrls.issueBook.returnIssuedbook.url+"?id="+id+"&status="+status,
    );
    return response;
}

export const issueBookByIdService = async (data)=>{
    let response = await issueBookApi(
        apiUrls.issueBook.issueBookById.method,
        apiUrls.issueBook.issueBookById.url+"?id="+data ,
        
    )
    return response
}

export const editIssueBookService = async(data)=>{
    let response = await issueBookApi(
        apiUrls.issueBook.editIssueBook.method,
        apiUrls.issueBook.editIssueBook.url ,
        data
    );
    return response;
}

export const deleteIssueBookService = async(id)=>{
    let response = await issueBookApi(
        apiUrls.issueBook.deleteIssueBook.method,
        apiUrls.issueBook.deleteIssueBook.url +"?id="+id,
    );
    return response

}