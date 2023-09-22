import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Footer from '../footer/Footer';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import {IoMdNotificationsOutline} from 'react-icons/io'
export default function Layout({ children }) {
    
    return (
        <Box sx={{ display: 'flex' }}>
             <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <Typography variant="h6" noWrap component="div">
                        LMS
                    </Typography>
                    <div className='flex '>
                        <div className='py-5 pr-2 '>

                            <IoMdNotificationsOutline size={25}></IoMdNotificationsOutline>
                        </div>
                        <div className='pt-1' >
                            <Button>

                                <Avatar ></Avatar>
                            </Button>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
            <Sidebar />
            <Box component="main" sx={{ width:`100%`, margin: '80px 30px 30px 30px ', padding: `0px` }}>
                {children}
            </Box>
        </Box>
    );
}