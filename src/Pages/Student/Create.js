import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SInputField } from '../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createStudentService } from '../../Services/apiServices/student/studentService';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect,useState } from 'react';
import { facultyService } from '../../Services/apiServices/faculty/facultyServices';
import { genderService } from '../../Services/apiServices/common/gender/genderService';
export default function CreateStudent() {
    const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm();
    const navigate = useNavigate();
    const [facultyList, setFacultyList] = useState([]);
    const [genderList, setGenderList] = useState([]);
    const [birthDate,setBirthDate] =useState("");
    const handleBirthDate=(data)=>(
        setBirthDate(data.toISOString().slice(0, 10))
    )
    const onSubmit = async (data)=>{
        try{
            debugger;
            data.birthDate=birthDate
            if(isSubmitting) return;
            const response = await createStudentService(data);
            if(response.status=== true){
                toast.success(response.message,{
                    autoclose:1000,
                })
                navigate("/Student")
            } else if(response.status=== false){
                toast.error(response.message,{
                    autoclose:1000,
                })
            }

        }
        catch(error){
            toast.error("Student Not Created !!",{
                autoClose:3000
            })
        }
       
    
    }
    useEffect(()=>{
        let facultyData =()=>{
            facultyService().then((response)=>{
                    setFacultyList(response.data)
            })
        }
        facultyData()
    },[])
    useEffect(()=>{
        let genderData =()=>{
            genderService().then((response)=>{
                setGenderList(response.data)
            })
        }
        genderData()
    },[])
    return (
        <>
            <CssBaseline />
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
                                    {...register('firstName',{required:true})}
                                />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl>
                                <TextField
                                    required
                                    label="Last Name"
                                    {...register('lastName',{required:true})}
                                />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <DatePicker
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
                                        labelId="faculty"
                                        id="faculty-select"
                                        label="Faculty"
                                        {...register("facultyId")}
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