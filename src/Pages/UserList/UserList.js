import { useState, React, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {  Button ,Switch, Toolbar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserListSerivce } from '../../Services/apiServices/common/commonServices';



export default function UserList() {
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



    //Fetch Users 
    useEffect(() => {
        const fetchedData = () => {
            UserListSerivce().then(({ status, data }) => {
                try {
                    if (status) {
                        setApiData(data);
                    }
                    else {
                        setApiData([]);
                    }
                }
                catch (error) {
                }
            })
        }
        fetchedData()
    }, [apiData])

    return (<>
        <Toolbar sx={{ flexDirection: `row`, borderRadius: '20px', justifyContent: "space-between", padding: '10px', alignItems: 'flex-start', background: 'white', marginBottom: '10px' }}>
            <Typography variant='h5' >User's List</Typography>
            <Link to={"/UserList/Create"}>
                <Button variant="contained" color="success" sx={{ marginBottom: `20px` }}>
                    Add
                </Button>

            </Link>
        </Toolbar >

        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '20px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell >
                                S.N
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Role
                            </TableCell>


                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                            return (
                                <TableRow hover key={item.id}>
                                    <TableCell>
                                        {(index + 1)}
                                    </TableCell>
                                    <TableCell>
                                        {item?.firstName} {item?.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {item?.email}
                                    </TableCell>
                                    <TableCell>
                                        {item?.role}
                                    </TableCell>
                                    <TableCell>
                                       {item?.role ==="Administrator"?<Switch defaultChecked color='success' disabled ></Switch>:<Switch checked={item?.active}></Switch>}
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