import { categoryApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const category = async ()=>{
    let response = await categoryApi(
        apiUrls.Category.Category.method,
        apiUrls.Category.Category.url
    );
    return response;
};

export const CreateCategory = async (data)=>{
    let response = await categoryApi(
        apiUrls.method.CreateCategory.method,
        apiUrls.Category.CreateCategory.url,
        data
    );
    return response;

}