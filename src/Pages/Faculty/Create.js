import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, Stack, TextField } from '@mui/material';
import { SInputField } from '../../Components/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export default function CreateFaculty() {
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = (data)=>{
       
    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Add Faculty</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                <TextField
                                    required
                                    label="Name"
                                    {...register('name',{required:true})}
                                />
                                </FormControl>
                            </SInputField>
                            {/* <SInputField>
                                <DatePicker
                                    label='Birth Date'
                                    disableFuture
                                    format='YYYY-MM-DD'
                                    defaultValue={today} type="date"
                                    onChange={(data) => handleInputChange(data.toISOString().slice(0, 10), "birthDate")}
                                />
                            </SInputField> */}
                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/Faculty"}>
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