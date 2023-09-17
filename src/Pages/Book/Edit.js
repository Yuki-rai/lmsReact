import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SInputField } from '../../Components/styles/Styles';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { editBookService, bookByIdService } from '../../Services/apiServices/book/bookServices';
import { categoryService } from '../../Services/apiServices/category/categoryServices';

export default function EditBook() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([])

    //Fetch by Id
    const { id } = useParams();
    useEffect(() => {
        let fetchData = async () => {
            await bookByIdService(id)
                .then((response) => {
                    setApiData(response.data);
                })
        }
        fetchData()
    }, [])

    
     // Category List
     const [categoryList,setCategoryList] = useState([]);
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
    }, [apiData])


    // to set the incoming value to the respective fields
    const [initialValue, setInitialValue] = useState({
        id: 0,
        name: "",
        authorName:"",
        categoryId:"",
    });

    useEffect(() => {
        setInitialValue({
            id: apiData?.id,
            name: apiData?.name || "",
            authorName:apiData?.authorName || "",
            categoryId:apiData?.categoryId || "",
        });
    }, [apiData]);
    useEffect(() => {
        // Use setValue to set values for each input field
        setValue("id", initialValue.id)
        setValue("name", initialValue.name);
        setValue("authorName", initialValue.authorName);
        setValue("categoryId", initialValue.categoryId);
    }, [initialValue]);


    const handleBirthDate = (data) => (
        setValue("birthDate", data)

    )

    const onSubmit = async (data) => {
        try {
            debugger;
            if (isSubmitting) return;
            const response = await editBookService(data);
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
                <h2>Edit</h2>
                <Box sx={{ bgcolor: 'white', padding: '10px', marginTop: '15px', borderRadius: '20px' }}>
                    <Box component="form" sx={{ padding: `10px` }} onSubmit={handleSubmit(onSubmit)} >
                        <FormGroup sx={{ display: `flex`, flexDirection: `row` }}>
                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="Book Name"
                                        {...register('name', { required: true })}
                                        value={initialValue.name}
                                        onChange={(e) => setInitialValue({ ...initialValue, name: e.target.value })}
                                    />
                                </FormControl>
                            </SInputField>


                            <SInputField>
                                <FormControl>
                                    <TextField
                                        required
                                        label="Author Name"
                                        {...register('authorName')}
                                        value={initialValue.authorName}
                                        onChange={(e) => setInitialValue({ ...initialValue, authorName: e.target.value })}
                                    />
                                </FormControl>
                            </SInputField>

                         


                            <SInputField>
                                <FormControl fullWidth>
                                    <InputLabel id="category">Faculty</InputLabel>
                                    <Select
                                        required
                                        labelId="category"
                                        id="category-select"
                                        label="Faculty"
                                        {...register("categoryId")}
                                        value={initialValue.categoryId}
                                        onChange={(e)=>setInitialValue({...initialValue,categoryId:e.target.value})}
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