import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";
import Layout from "../Components/layout/Layout";
export const PrivateRoute =({component:Component}) =>{
    const userData = useSelector((state)=>state.userDetail);
    
    return(
        userData.user?.status === true? 
        <Layout>
            <Outlet/>
        </Layout>
        : <Navigate to="/login"/>
    )
       
}