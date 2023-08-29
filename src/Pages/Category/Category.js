import { useState, React, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Toolbar } from '@mui/material';
import { FaTrash } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { category } from '../../Services/apiServices/category/categoryServices';

export default function Category() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [apiData, setApiData] = useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        const fetchedData = () =>{
            category().then(({status,data,message})=>{
                try{
                    if(status){
                        setApiData(data);
                        console.log(apiData);
                    }
                }
                catch(error){
                        alert("asd")
                }
            })
        }
        fetchedData()       
    }, [true])

    return (<>
        <Toolbar>
            <h1>Category</h1>
            <Link to={"/Category/Create"}>
                <Button variant="contained" color="success">
                    Create
                </Button>
            </Link>

        </Toolbar >
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '20px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell >
                                Id
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                          
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                            return (
                                <TableRow hover key={item.id}>
                                    <TableCell>
                                        {(item?.id)}
                                    </TableCell>
                                    <TableCell>
                                        {item?.name}
                                    </TableCell>
                                  
                                    <TableCell>
                                        <Button sx={{ margin: "4px" }} variant="contained" startIcon={<BsPencilSquare />}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" startIcon={<FaTrash />} color="error">
                                            Delete
                                        </Button>


                                    </TableCell>
                                </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={apiData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </>
    );
}