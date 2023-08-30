import { categoryApi } from "../../apiHelpers";
import apiUrls from "../../apiUrls";

export const categoryService = async ()=>{
    let response = await categoryApi(
        apiUrls.category.category.method,
        apiUrls.category.category.url
    );
    return response;
};

export const createCategoryService = async (data)=>{
    let response = await categoryApi(
        apiUrls.category.createCategory.method,
        apiUrls.category.createCategory.url,
        data
    );
    return response;

}