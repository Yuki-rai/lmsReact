import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SInputField } from '../../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { editStudentService, studentByIdService } from '../../../Services/apiServices/student/studentService';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { courseService } from '../../../Services/apiServices/course/courseServices';
import { genderService } from '../../../Services/apiServices/common/gender/genderService';

export default function EditStudent() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([])

    //Fetch by Id
    const { id } = useParams();
    useEffect(() => {
        let fetchData = async () => {
            await studentByIdService(id)
                .then((response) => {
                    setApiData(response.data);
                })
        }
        fetchData()
    }, [])

    //Faculty List Fetch
    const[facultyList,setFacultyList] = useState([])
    useEffect(()=>{
        let facultyData =()=>{
            courseService().then((response)=>{
                setFacultyList(response.data)
            })
        }
        facultyData()
    },[apiData])


    //Gender list Fetch
    const [genderList,setGenderList] = useState([])
    useEffect(()=>{
        let genderData =()=>{
            genderService().then((response)=>{
                setGenderList(response.data)
            })
        }
        genderData()
    },[apiData])


    // to set the incoming value to the respective fields
    const [initialValue, setInitialValue] = useState({
        id: 0,
        firstName: "",
        lastName:"",
        birthDate:"",
        facultyId:0,
        genderId:0
    });

    useEffect(() => {
        setInitialValue({
            id: apiData?.id,
            firstName: apiData?.firstName || "",
            lastName:apiData?.lastName || "",
            birthDate:apiData?.birthDate || "",
            facultyId:apiData?.facultyId || "",
            genderId:apiData?.genderId || "",
        });
    }, [apiData]);
    useEffect(() => {
        // Use setValue to set values for each input field
        setValue("id", initialValue.id)
        setValue("firstName", initialValue.firstName);
        setValue("lastName", initialValue.lastName);
        setValue("genderId", initialValue.genderId);
        setValue("facultyId", initialValue.facultyId);
    }, [initialValue]);


    const handleBirthDate = (data) => (
        setValue("birthDate", data)

    )

    const onSubmit = async (data) => {
        try {
            debugger;
            if (isSubmitting) return;
            const response = await editStudentService(data);
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
            toast.error(error.message)
        }

    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Edit</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="First Name"
                                        {...register('firstName', { required: true })}
                                        value={initialValue.firstName}
                                        onChange={(e) => setInitialValue({ ...initialValue, firstName: e.target.value })}
                                    />
                                </FormControl>
                            </SInputField>


                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Last Name"
                                        {...register('lastName')}
                                        value={initialValue.lastName}
                                        onChange={(e) => setInitialValue({ ...initialValue, lastName: e.target.value })}
                                    />
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <DatePicker
                                    label='Birth Date'
                                    format='YYYY-MM-DD'
                                    name="birthDate"
                                    onChange={handleBirthDate}
                                    value={initialValue?.birthDate ? dayjs(initialValue?.birthDate) : dayjs()}
                                />
                            </SInputField>


                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="faculty">Faculty</InputLabel>
                                    <Select
                                        labelId="faculty"
                                        id="faculty-select"
                                        label="Faculty"
                                        {...register("facultyId")}
                                        value={initialValue.facultyId}
                                        onChange={(e)=>setInitialValue({...initialValue,facultyId:e.target.value})}
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
                                        labelId="gender"
                                        id="gender-select"
                                        label="Gender"
                                        {...register("genderId")}
                                        value={initialValue.genderId}
                                        onChange={(e)=>setInitialValue({...initialValue,genderId:e.target.value})}
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