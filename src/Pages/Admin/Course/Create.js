import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, FormHelperText, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { SInputField } from '../../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createCourseService } from '../../../Services/apiServices/course/courseServices';
import { toast } from 'react-toastify';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
    courseName:yup.string().required("This field is required !"),
    semester:yup.number().min(1,"Value should be greater or equal to 1").required("This field is required !"),
    credits:yup.string().required("This field is required !"),
    description:yup.string().required("This field is required !")

})


export default function CreateCourse() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver:yupResolver(schema)
    });
  
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            debugger;
            if (isSubmitting) return;
            const response = await createCourseService(data);
            if (response.status === true) {
                toast.success(response.message, {
                    autoclose: 1000,
                })
                navigate("/Course")
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
           
            <Container maxWidth="xl">
            <Toolbar sx={{ flexDirection: `row`, borderRadius: '20px', justifyContent: "space-between", padding: '10px', alignItems: 'flex-start', background: 'white', marginBottom: '10px' }}>
                <Typography variant='h5' >Add Course</Typography>
               
            </Toolbar >
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        label="Name"
                                        {...register('courseName')}
                                        error={errors?.courseName}    
                                        helperText={errors?.courseName?.message}                                    
                                    />

                                </FormControl>
                            </SInputField>
                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/Course"}>
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