import * as React from 'react';
import dayjs from 'dayjs';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormGroup, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SInputField } from '../../Components/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../../ApiUrl';



export default function CreateAuthor() {
    const today = dayjs();
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        birthDate: ''
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
            const response = await fetch(ApiUrl.API_URL + 'Admin/Author/CreateAuthor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        }
        catch (error) {
            alert(error);
        }

    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Add Author</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <TextField
                                    required
                                    label="Name"
                                    onChange={(abc) => handleInputChange(abc.target.value, "name")}
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
                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/Author"}>
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