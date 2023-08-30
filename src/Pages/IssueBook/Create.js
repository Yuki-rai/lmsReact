import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, Stack, TextField } from '@mui/material';
import { SInputField } from '../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createIssueBookService } from '../../Services/apiServices/issueBook/issueBookServices';
import { toast } from 'react-toastify';


export default function CreateIssueBook() {
    const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data)=>{
        try{
            debugger;
            if(isSubmitting) return;
            const response = await createIssueBookService(data);
            if(response.status=== true){
                toast.success(response.message,{
                    autoclose:1000,
                })
                navigate("/IssueBook")
            } else if(response.status=== false){
                toast.error(response.message,{
                    autoclose:1000,
                })
            }

        }
        catch(error){
            toast.error(error.message)
        }
       
    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <h2>Add IssueBook</h2>
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
                            <Link to={"/IssueBook"}>
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