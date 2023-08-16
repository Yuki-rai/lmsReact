import * as React from 'react';
import dayjs from 'dayjs';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SInputField } from '../../Components/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { ApiUrl } from '../../ApiUrl';


export default function CreateStudent() {
    const navigate = useNavigate();
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(ApiUrl.API_URL + 'Admin/Student/CreateStudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            navigate('/Student');
        }
        catch (error) {
            alert(error);
        }

    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Add Student</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <TextField
                                    required
                                    label="First Name"
                                    onChange={(abc) => handleInputChange(abc.target.value, "firstName")}
                                />
                            </SInputField>
                            <SInputField>
                                <TextField
                                    required
                                    label="Last Name"
                                    onChange={(abc) => handleInputChange(abc.target.value, "lastName")}
                                />
                            </SInputField>
                            <SInputField>
                                <DatePicker
                                    label='Birth Date'
                                    disableFuture
                                    format='YYYY-MM-DD'
                                    defaultValue={today} type="date"
                                    onChange={(data) => handleInputChange(data.toISOString().slice(0, 10), "birthDate")}
                                />
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
                </Box>
            </Container>
        </>
    );
}