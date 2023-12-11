import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SInputField } from '../../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createStudentService } from '../../../Services/apiServices/student/studentService';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { courseService } from '../../../Services/apiServices/course/courseServices';
import { genderService } from '../../../Services/apiServices/common/gender/genderService';
export default function CreateStudent() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
        defaultValues:{
            firstName:'',
            lastName:'',
            birthDate:'',
            facultyId:0,
            genderId:0
            
        }
    });

    const [initialValue, setInitialValue] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        facultyId: '',
        genderId: ''
    })

    const handleChange=(e)=>{
        const {name,value}= e.target;
        setInitialValue({
            ...initialValue,
            [name]:value
        })
        
        
    }
    const navigate = useNavigate();
    const [facultyList, setFacultyList] = useState([]);
    const [genderList, setGenderList] = useState([]);
    const handleBirthDate = (data) => (
        setValue("birthDate", data)

    )
    const onSubmit = async (data) => {
        try {
            debugger
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

    //Fetch Faculty List
    useEffect(() => {
        let facultyData = () => {
            courseService().then((response) => {
                setFacultyList(response.data)
            })
        }
        facultyData()
    }, [])

    //Fetch Gender List
    useEffect(() => {
        let genderData = () => {
            genderService().then((response) => {
                setGenderList(response.data)
            })
        }
        genderData()
    }, [])


    return (
        <>
            <Container maxWidth="xl">
                <h2>Add Student</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="First Name"
                                        value={initialValue.firstName}
                                        {...register('firstName', { required: true })}
                                        onChange={handleChange}
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
                                <DatePicker
                                    isRequired='true'
                                    label='Birth Date'
                                    disableFuture
                                    format='YYYY-MM-DD'
                                    onChange={handleBirthDate}
                                />
                            </SInputField>
                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="faculty">Faculty</InputLabel>
                                    <Select
                                        required
                                        labelId="faculty"
                                        id="faculty-select"
                                        label="Faculty"
                                        {...register("facultyId")}
                                        value={initialValue.facultyId}
                                        onChange={handleChange}

                                    >
                                        {facultyList.map((item, index) => (
                                            <MenuItem key={index} value={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        required
                                        labelId="gender"
                                        id="gender-select"
                                        label="Gender"
                                        {...register("genderId")}
                                        value={initialValue.genderId}
                                        onChange={handleChange}
                                    >
                                        {genderList.map((item, index) => (
                                            <MenuItem key={index} value={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
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