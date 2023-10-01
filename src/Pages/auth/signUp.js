import { Box, FormControl, FormGroup, TextField, Typography } from "@mui/material";
import img from '../../assests/img/signup.png'
import { SInputField } from "../../Components/styles/Styles";
export function SignUp() {
    return (
        <>
            <Box className="bg-white flex flex-row">
                <div className="flex-1">
                <Typography variant="h4" className="text-center">Library Management System</Typography>

                    <img src={img} alt="Avatar"  />
                </div>
                <div className="flex-1 border-solid border-4 p-8">
                   
                    <form>
                    <div className="header m-4">
                        <Typography variant="h4" className="text-center">Sign Up</Typography>
                    </div>
                    <div className="form-body">
                        <FormGroup  sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        size="small"
                                        required
                                        label="Name"
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField 
                                        size="small"
                                        required
                                        label="Name"
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        size="small"
                                        required
                                        label="Name"
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                         size="small"
                                        required
                                        label="Name"
                                    />
                                </FormControl>
                            </SInputField>
                        </FormGroup>
                        </div>
                    </form>
                </div>

            </Box>
        </>
    )
}