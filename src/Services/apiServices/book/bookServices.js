import { bookApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const bookService = async ()=>{
    let response = await bookApi(
        apiUrls.book.book.method,
        apiUrls.book.book.url
    );
    return response;
};

export const createBookService = async (data)=>{
    let response = await bookApi(
        apiUrls.book.createBook.method,
        apiUrls.book.createBook.url,
        data
    );
    return response;

}