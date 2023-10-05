import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Footer from '../footer/Footer';
import { AppBar, Avatar, Badge, Button, Toolbar, Typography } from '@mui/material';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useState } from 'react';
import ava from '../../assests/img/ava.jpg'

export default function Layout({ children }) {
 

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        LMS
                    </Typography>
                    <div className='flex '>
                    <button className="py-2 px-3   focus:outline-none">
                            <Badge badgeContent={5} color="error">

                                <IoMdNotificationsOutline className='hover:bg-blue-400 rounded-full'  size={25}></IoMdNotificationsOutline>
                            </Badge>

                        </button >
                        <div className='pt-1' >
                            <Button>

                                <Avatar src={ava}></Avatar>
                            </Button>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
            <Sidebar />
            <Box component="main" sx={{ width: `100%`, margin: '80px 30px 30px 30px ', padding: `0px` }}>
                {children}
            </Box>
        </Box>
    );
}