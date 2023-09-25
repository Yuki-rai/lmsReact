import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Services/apiServices/auth/loginService";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../redux/userDetail";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleCheckBox = () => {
        setChecked(!checked);
    }

    const onSubmit = async (data) => {
        if (isSubmitting) return;
        loginUser(data).then((response) => {
            if (response.status === true) {
                dispatch(setUserDetail(response));
                toast.success(`${response.data.name} Loggedin Successfully`, {
                    icon: "🚀",
                    autoClose: 2000,
                    position: 'top-right',
                });
                navigate("/")
            }
            else {
                toast.error(response.message, {
                    autoClose: 1000,
                });
            }
        })
            .catch(() => {
                toast.error("Login Failure", {
                    autoClose: 3000,
                });
            })

    }



    return (
        <Box sx={{ display: `flex`, background: `white`, width: `500px`, border: `silver solid 1px`, borderRadius: `10px`, height: `500px`, alignItems: `center`, margin: `50px auto`, flexDirection: `column`, gap: `16px` }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography component="h1" variant="h5" sx={{ textAlign: `center`, margin: `20px` }}>
                    Sign In
                </Typography>
                <Box sx={{ padding: `20px` }}>
                    <FormControl sx={{
                        display: `flex`,
                        alignItems: ` center`,
                        margin: `5px`,
                        padding: `10px`
                    }}>
                        <TextField
                            autoComplete="username"
                            fullWidth
                            id="email"
                            label="Email"
                            {...register("email")} />
                    </FormControl>
                    <FormControl sx={{
                        display: `flex`, alignItems: `center`, margin: `5px`, padding: `10px`
                    }}>
                        <TextField
                            fullWidth
                            autoComplete="current-password"
                            label="Password"
                            type="password"
                            id="password"
                            {...register("password")}
                        />
                    </FormControl>
                    <FormControlLabel
                        sx={{ alignItems: `center` }}
                        label="Remember Me"
                        onChange={handleCheckBox}
                        control={<Checkbox value="remember" />} />
                    <Button
                        type="button"
                        variant="text"
                        color="primary"
                        sx={{ textTransform: `none`, outlineColor: `white` }}
                    > Forgot Password</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ textTransform: `none` }}
                    > {isSubmitting ? "Signing in.." : "Sign In"}</Button>
                </Box>
            </form>
        </Box>

    )
}