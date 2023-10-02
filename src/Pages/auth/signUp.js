import { Box, Button, FormControl, FormGroup, Grid, TextField, Typography } from "@mui/material";
import img from '../../assests/img/signup.png'
import { SInputField } from "../../Components/styles/Styles";
import { Link } from "react-router-dom";
import { useState } from "react";
export function SignUp() {
    const [isHovered,setIsHovered] = useState(false)

    const handleHovered = ()=>{
        setIsHovered(!isHovered);
    }
    const signUpStyle =isHovered? "contained" :"outlined"

    return (
        <>
            <Box className=" flex flex-row ">
                <div className="flex-1 w-3/5 h-2/3">
                    <Typography variant="h4" className="text-center">LMS</Typography>
                    <div className="w-2/4 h-2/5 m-auto">

                        <img src={img} alt="Avatar" sx={{ height: "200px" }} />
                    </div>
                </div>
                <div className="w-2/5 p-10">

                    <form className="bg-white rounded-xl p-5 w-auto">
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
                                                    fullWidth
                                                ></TextField>
                                            </FormControl>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                    <div className="m-3 ">
                                    <FormControl fullWidth >
                                        <Button variant={signUpStyle} onMouseEnter={handleHovered} onMouseLeave={handleHovered} >Sign Up</Button>
                                        </FormControl>
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