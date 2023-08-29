import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Footer from '../footer/Footer';

export default function Layout({ children }) {
  
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" sx={{ width:`100%`, margin: '80px 30px 30px 30px ', padding: `0px` }}>
                {children}
            </Box>
            <Footer/>
        </Box>
    );
}