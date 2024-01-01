import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { SInputField } from '../../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { createStudentService } from '../../../Services/apiServices/student/studentService';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { courseService } from '../../../Services/apiServices/course/courseServices';
import { genderService } from '../../../Services/apiServices/common/gender/genderService';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    firstName: yup.string().required("Name is required !"),
    courseId: yup.number().min(1, "Please select course !").required("This Field is required !").typeError("Please select course !"),
})

export default function CreateStudent() {
    const { register, handleSubmit, control, formState: { errors, isSubmitting }, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    // const [initialValue, setInitialValue] = useState({
    //     firstName: '',
    //     lastName: '',
    //     birthDate: '',
    //     courseId: '',
    //     genderId: ''
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInitialValue({
    //         ...initialValue,
    //         [name]: value
    //     })
    // }
    const navigate = useNavigate();
    const [courseList, setCourseList] = useState([]);
    const [genderList, setGenderList] = useState([]);
    const [date, setDate] = useState("")
    console.log(date, "date");

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

    //Fetch Course List
    useEffect(() => {
        let courseData = () => {
            courseService().then((response) => {
                setCourseList(response.data)
            })
        }
        courseData()
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
                <Toolbar sx={{ flexDirection: `row`, borderRadius: '20px', justifyContent: "space-between", padding: '10px', alignItems: 'flex-start', background: 'white', marginBottom: '10px' }}>
                    <Typography variant='h6' > + Add Student</Typography>

                </Toolbar >
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField

                                        label="First Name"
                                        // value={initialValue.firstName}
                                        {...register('firstName')}
                                        error={errors?.firstName}
                                        helperText={errors?.firstName?.message}
                                    // onChange={handleChange}
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Last Name"
                                        // value={initialValue.lastName}
                                        {...register('lastName')}
                                    // onChange={handleChange}

                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <Controller
                                    control={control}
                                    name='birthDate'
                                    error
                                    render={({ field: { onChange } }) => (
                                        <DatePicker
                                            onChange={onChange}
                                            label='Birth Date'
                                            disableFuture
                                            format='YYYY/MM/DD'
                                        ></DatePicker>
                                    )} />

                                <FormHelperText error>{errors?.birthDate?.message} </FormHelperText>

                            </SInputField>
                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="course" error={errors?.courseId}>Course</InputLabel>
                                    <Select
                                        labelId="course"
                                        id="course-select"
                                        label="Course"
                                        error={errors?.courseId}
                                        {...register("courseId")}
                                    // value={initialValue.courseId}
                                    // onChange={handleChange}
                                    >

                                        {courseList.map((item, index) => (
                                            <MenuItem key={index} value={item.id}>
                                                {item.courseName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText error> {errors?.courseId?.message}</FormHelperText>
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select

                                        labelId="gender"
                                        id="gender-select"
                                        label="Gender"
                                        {...register("genderId")}
                                    // value={initialValue.genderId}
                                    // onChange={handleChange}
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
                            <Link to={"/Admin/Student"}>
                                <Button variant="outlined" color='error' endIcon={<IoIosArrowRoundBack />}>
                                    Back
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="success" size='small'>
                                {isSubmitting ? "Submitting" : "Submit"}
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    );
}