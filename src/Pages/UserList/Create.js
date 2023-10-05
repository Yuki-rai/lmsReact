import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { SInputField } from '../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createStudentService } from '../../Services/apiServices/student/studentService';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { facultyService } from '../../Services/apiServices/faculty/facultyServices';
import { genderService } from '../../Services/apiServices/common/gender/genderService';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function CreateUser() {
    const schema = yup
        .object()
        .shape({
            firstName:yup.string().required("This field is required")
        });

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',

        }
    });

    const [initialValue, setInitialValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValue({
            ...initialValue,
            [name]: value
        })


    }
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            const response = await createStudentService(data);
            if (response.status === true) {
                toast.success(response.message, {
                    autoclose: 1000,
                })
                navigate("/Student")
            } else if (response.status === false) {
                toast.error(response.message, {
                    autoclose: 1000,
                })
            }

        }
        catch (error) {
            toast.error("Student Not Created !!", {
                autoClose: 3000
            })
        }


    }

 


    return (
        <>
            <Container maxWidth="xl">
                <Toolbar sx={{ flexDirection: `row`, borderRadius: '20px', justifyContent: "space-between", padding: '10px', alignItems: 'flex-start', background: 'white', marginBottom: '10px' }}>
                    <Typography variant='h5' >Add User</Typography>

                </Toolbar >
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} autoCapitalize='off' >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="First Name"
                                        error={errors.firstName}
                                        value={initialValue.firstName}
                                        {...register('firstName', { required: true })}
                                        onChange={handleChange}
                                        helperText={errors?.firstName?.message}
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Last Name"
                                        value={initialValue.lastName}
                                        {...register('lastName')}
                                        onChange={handleChange}

                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Email"
                                        value={initialValue.email}
                                        {...register('email')}
                                        onChange={handleChange}

                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Password"
                                        value={initialValue.password}
                                        {...register('password')}
                                        onChange={handleChange}
                                        type='password'

                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Confirm Password"
                                        value={initialValue.confirmPassword}
                                        {...register('confirmPassword')}
                                        onChange={handleChange}
                                        type='password'

                                    />
                                </FormControl>
                            </SInputField>
                            
                         
                           
                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/UserList"}>
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