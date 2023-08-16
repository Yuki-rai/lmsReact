import * as React from 'react';
import dayjs from 'dayjs';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SInputField, SPanelBody } from '../../Components/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Form, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../../ApiUrl';
import SelectInput from '@mui/material/Select/SelectInput';
import { useForm } from "react-hook-form";


export default function CreateStudent() {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const today = dayjs();
    const [formData, setFormData] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        birthDate: '',
        genderId: 1
    });

    const handleInputChange = (e, test) => {
        setFormData((prevData) => ({
            ...prevData,
            [test]: e,
        }));
    };
   

    const gender = 'Female';
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Add Student</h2>
                <SPanelBody >
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit} >
                        <h3>Student Details</h3>
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required

                                        label="First Name"
                                        onChange={(e) => handleInputChange(e.target.value, "firstName")}
                                    />
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Last Name"
                                        onChange={(e) => handleInputChange(e.target.value, "lastName")}
                                    />
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select

                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        value={formData.genderId}
                                        onChange={(e) => handleInputChange(e.target.value, "genderId")}
                                    >
                                        <MenuItem value={1}>Male</MenuItem>
                                        <MenuItem value={2}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </SInputField>


                            <SInputField>
                                <FormControl>
                                    <DatePicker
                                        label='Birth Date'

                                        disableFuture
                                        format='YYYY-MM-DD'
                                        defaultValue={today} type="date"
                                        onChange={(data) => handleInputChange(data.toISOString().slice(0, 10), "birthDate")}
                                    />
                                </FormControl>                                
                            </SInputField>



                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/Student"}>
                                <Button variant="outlined" color='error' endIcon={<IoIosArrowRoundBack />}>
                                    Back
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="success" size='small'>
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </SPanelBody>
            </Container>
        </>
    );
}