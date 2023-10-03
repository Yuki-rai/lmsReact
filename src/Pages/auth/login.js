import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Services/apiServices/auth/loginService";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../redux/userDetail";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
        <Box className="flex justify-center mt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border  border-solid border-slate-400 " >
                <Box className="form-header p-5 text-center">
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                </Box>
                <Box className="form-body p-5">
                    <FormGroup>
                        <div className="m-3">
                        <FormControl>
                            <TextField
                                autoComplete="username"
                                fullWidth
                                id="email"
                                label="Email"
                                size="small"
                                {...register("email")} />
                        </FormControl>
                        </div>
                        <div className="m-3">
                        <FormControl>
                            <TextField
                                fullWidth
                                autoComplete="current-password"
                                label="Password"
                                type="password"
                                id="password"
                                size="small"
                                {...register("password")}
                            />
                        </FormControl>
                        </div>
                        <div className="flex m-3">
                            <FormControlLabel
                                sx={{ alignItems: `center` }}
                                label="Remember Me"
                                onChange={handleCheckBox}
                                control={<Checkbox value="remember" />} />
                            {/* <Button
                            type="button"
                            variant="text"
                            color="primary"
                            sx={{ textTransform: `none`, outlineColor: `white` }}
                        > Forgot Password</Button> */}
                        </div>
                        <div className="flex justify-between mt-5">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ textTransform: `none` }}
                            > {isSubmitting ? "Signing in.." : "Sign In"}</Button>
                            <Link to="/SignUp">
                                <Button
                                    type="button"
                                    variant="outlined"
                                    sx={{ textTransform: `none` }}
                                > Sign Up</Button>
                            </Link>
                        </div>
                    </FormGroup>
                </Box>
            </form>
        </Box>

    )
}