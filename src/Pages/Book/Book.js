import { useState, React, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ApiUrl } from '../../ApiUrl';
import { Button, Toolbar } from '@mui/material';
import { FaTrash } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Author() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [book, setBook] = useState([])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const GetAllBook = () => {
        fetch(ApiUrl.API_URL + 'Admin/Book/GetAllBook')
            .then(response => response.json())
            .then(response => {
                const test = [];
                response.data.map((item) => {
                    test.push(item);
                })
                setBook(test);
            })
    }
    useEffect(() => {
        GetAllBook();
    }, [true])

    return (<>
        <Toolbar>
            <h1>Book</h1>
            <Link to={"/Book/Create"}>
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
                                Category
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {book.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                            return (
                                <TableRow hover key={item.id}>
                                    <TableCell>
                                        {(item?.id)}
                                    </TableCell>
                                    <TableCell>
                                        {item?.name}
                                    </TableCell>
                                    <TableCell>
                                        {(item?.categoryName)}
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
                count={book.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </>
    );
}