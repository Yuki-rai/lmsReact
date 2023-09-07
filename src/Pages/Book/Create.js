import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SInputField } from '../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createBookService } from '../../Services/apiServices/book/bookServices';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { categoryService } from '../../Services/apiServices/category/categoryServices';

export default function CreateBook() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        let categoryData = () => {
            categoryService().then((response) => {
                try {
                    if (response.status === true) {
                        setCategoryList(response.data);
                    }
                }
                catch (error) { }
            });
        }
        categoryData();
    }, false)

    const onSubmit = async (data) => {
        try {
            console.log(categoryList);
            if (isSubmitting) return;
            const response = await createBookService(data);
            if (response.status === true) {
                toast.success(response.message, {
                    autoclose: 1000,
                })
                navigate("/Book")
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
                <h2>Add Book</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="Name"
                                        {...register('name', { required: true })}
                                    />
                                </FormControl>
                            </SInputField>

                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="Author Name"
                                        {...register('authorName', { required: true })}
                                    />
                                </FormControl>
                            </SInputField>
                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="category">Category</InputLabel>
                                    <Select
                                        labelId="category"
                                        id="category-select"
                                        label="Category"
                                        {...register("categoryId")}
                                    >
                                        {categoryList.map((item, index) => (
                                            <MenuItem key={index} value={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </SInputField>
                           
                        </FormGroup>

                        <Stack direction="row" spacing={2} sx={{ margin: `20px 20px 20px 5px` }}>
                            <Link to={"/Book"}>
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