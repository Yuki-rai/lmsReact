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

export default function Issue() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [author, setAuthor] = useState([])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const GetAllAuthor = () => {
        fetch(ApiUrl.API_URL + '/api/Admin/Author/GetAllAuthor')
            .then(response => response.json())
            .then(data => {
                const test = [];
                data.map((item) => {
                    test.push(item);
                })
                setAuthor(test);
            })
    }
    useEffect(() => {
        GetAllAuthor();
    }, [true])

    return (<>
        <Toolbar>
            <h1>Issue</h1>
            <Button variant="contained" color="success">
                Create
            </Button>

        </Toolbar >
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Id
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                BirthDate
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {author.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                            return (
                                <TableRow hover>
                                    <TableCell>
                                        {(item.id)}
                                    </TableCell>
                                    <TableCell>
                                        {item.name}
                                    </TableCell>
                                    <TableCell>
                                        {(item.birthDate).slice(0, 10)}
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
                count={author.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </>
    );
}