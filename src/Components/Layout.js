import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar />
            <Box component="main" sx={{ width:`100%`, margin: '80px 30px 30px 30px ', padding: `0px` }}>
                {children}
            </Box>
        </Box>
    );
}