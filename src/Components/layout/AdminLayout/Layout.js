import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Footer from '../../footer/Footer';
import { AppBar, Avatar, Badge, Button, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useState } from 'react';
import ava from '../../../assests/img/ava.jpg'
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PiChatDotsDuotone } from 'react-icons/pi';
export default function Layout({ children }) {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        LMS
                    </Typography>
                    <div className='flex '>
                        <List>
                            <ListItemButton sx={{ padding: "5px" }} onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                                <Badge badgeContent={5} color="error">
                                    <IoMdNotificationsOutline size={25}></IoMdNotificationsOutline>

                                </Badge>
                                {isNotificationOpen ? <MdExpandMore /> : <MdExpandLess className='' />}
                            </ListItemButton>
                            <Collapse in={isNotificationOpen} className='absolute w-40 rounded-xl bg-white -translate-x-28'>
                                <div className='notification p-3'>
                                    <div className='notification-header'>
                                        <h4 className='text-black'>Header</h4>
                                    </div>
                                    <div className='notification-body'>
                                        <p className='text-slate-400 font-serif text-sm overflow-hidden  max-w-full'>
                                            Hy  my name is bijay rai and i dont know tg
                                        </p>
                                    </div>
                                </div>
                                <Divider/>
                                <List disablePadding>
                                    <ListItem disablePadding >
                                        <ListItemButton>
                                            <ListItemIcon >
                                            <PiChatDotsDuotone/>
                                            </ListItemIcon>
                                            <ListItemText className='text-slate-400 font-serif text-sm overflow-hidden  max-w-full'>
                                                asd
                                                Hy  my name is bijay rai and i dont know tg
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding >
                                        <ListItemButton>
                                            <ListItemIcon >
                                            <PiChatDotsDuotone/>
                                            </ListItemIcon>
                                            <ListItemText className='text-black'>
                                                asd
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>



                            </Collapse>

                        </List>


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