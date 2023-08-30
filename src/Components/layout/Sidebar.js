import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai'
import { FaHome, FaWrench } from 'react-icons/fa'
import { PiStudentFill } from 'react-icons/pi'
import { GiBookCover } from 'react-icons/gi'
import { MdBook, MdExpandLess, MdExpandMore } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Collapse } from '@mui/material';
const drawerWidth = 240;
function Sidebar(props) {
    const [open, setOpen] = useState(false);
    const handleListItem = () => {
        setOpen(!open);
    }

    return (
        <div>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        LMS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <Link to="/" style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            width: '100%'
                        }}>
                            <ListItemButton sx={{ padding: '15px' }} >
                                <ListItemIcon sx={{ fontSize: '25px' }}>
                                    <FaHome />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>                    


                        <ListItemButton sx={{ padding: '15px' }} onClick={handleListItem}>
                            <ListItemIcon sx={{ fontSize: '25px' }}>
                                <FaWrench />
                            </ListItemIcon>
                            <ListItemText primary="SetUp" />
                            {open ? <MdExpandLess /> : <MdExpandMore />}
                        </ListItemButton>
                        <Collapse in={open}>
                            <List sx={{ padding: `0px 0px 0px 25px` }}>
                                {mainArray.map(({ label, icon, to }) => {
                                    return (
                                        <ListItem key={label} disablePadding>
                                            <Link to={to} style={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                width: '100%'
                                            }}>
                                                <ListItemButton sx={{ padding: '15px' }}>
                                                    <ListItemIcon sx={{ fontSize: '25px' }}>
                                                        {icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={label} />
                                                </ListItemButton>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Collapse>
                        <Link to="/IssueBook" style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            width: '100%'
                        }}>
                            <ListItemButton sx={{ padding: '15px' }} >
                                <ListItemIcon sx={{ fontSize: '25px' }}>
                                    <MdBook />
                                </ListItemIcon>
                                <ListItemText primary="Issue Book" />
                            </ListItemButton>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        {secondaryArray.map(({ label, icon, to }) => {
                            return (
                                <ListItem key={label} disablePadding>

                                    <ListItemButton sx={{ padding: '15px' }}>
                                        <ListItemIcon sx={{ fontSize: '25px' }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </div >
    )
}

const mainArray = [

    {
        label: "Faculty",
        icon: <AiOutlineUserAdd />,
        to: "/Faculty",
    },
    {
        label: "Student",
        icon: <PiStudentFill />,
        to: "/Student",
    },
    {
        label: "Book",
        icon: <GiBookCover />,
        to: "/Book",


    },
    {
        label: "Category",
        icon: <MdBook />,
        to: "/Category",

    }
]

const secondaryArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
        to: "/Settings"
    },
    {
        label: "Logout",
        icon: <FiLogOut />,
        to: "/"
    }
]
export default Sidebar

