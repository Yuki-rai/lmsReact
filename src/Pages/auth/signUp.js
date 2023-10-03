import { Box, Button, Divider, FormControl, FormGroup, Grid, TextField, Typography } from "@mui/material";
import img from '../../assests/img/signup.png'
import { SInputField } from "../../Components/styles/Styles";
import { Link } from "react-router-dom";
import { FaFacebook, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useState } from "react";
export function SignUp() {
    const [isHovered, setIsHovered] = useState(false)

    const handleHovered = () => {
        setIsHovered(!isHovered);
    }
    const signUpStyle = isHovered ? "contained" : "outlined"

    return (
        <>
            <Box className=" flex flex-row">
                <div className="flex-1 w-3/5 ">
                    <img src={img} alt="Avatar" sx={{ width: "full", height: "full" }} />
                </div>
                <div className="w-2/5 p-10">
                    <form className="bg-white rounded-xl p-5 w-auto" autoComplete="off">
                        <div className="header m-4">
                            <Typography variant="h4" className="text-center font-bold ">Welcome to LMS</Typography>
                            <div className="text-center font-thin font-sans">
                                Already signed up? <Link to="/login" className="no-underline text-blue-500 font-bold"> Login </Link>
                            </div>
                        </div>
                        <div className="form-body">
                            <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                                <Grid container >

                                    <Grid item xs={6}>
                                        <div className="m-3">
                                            <FormControl>
                                                <TextField
                                                    size="small"
                                                    label="First Name"
                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="m-3">
                                            <FormControl>
                                                <TextField
                                                    size="small"
                                                    label="Last Name"
                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="m-3 ">
                                            <FormControl fullWidth>
                                                <TextField
                                                    size="small"
                                                    label="Email"
                                                    type="email"


                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="m-3 ">
                                            <FormControl fullWidth>
                                                <TextField
                                                    size="small"
                                                    label="Password"
                                                    type="password"

                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="m-3 ">
                                            <FormControl fullWidth>
                                                <TextField
                                                    size="small"
                                                    label="Confirm Password"
                                                    type="password"
                                                    fullWidth
                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className="m-3 ">
                                            <FormControl fullWidth >
                                                <Button type="submit" variant={signUpStyle} onMouseEnter={handleHovered} onMouseLeave={handleHovered} >Sign Up</Button>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider sx={{ fontSize: "15px", color: "rgba(0, 0, 0, 0.12)" }}> Or</Divider>
                                        <div className="social flex justify-center">

                                            <FaFacebook size={30} color="#4267B2" className="m-2"></FaFacebook>
                                            <FcGoogle size={30} className="m-2"></FcGoogle>
                                            <FaTwitter size={30} color="#1DA1F2" className="m-2"></FaTwitter>
                                        </div>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </div>
                    </form>
                </div>

            </Box>
        </>
    )
}