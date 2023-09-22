import React from "react";
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement,ArcElement } from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { FaHome, FaWrench } from 'react-icons/fa'
import { GiBlackBook } from "react-icons/gi";
import { PiStudentLight } from "react-icons/pi";
import { AiOutlineSmile } from "react-icons/ai";

ChartJs.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement,ArcElement
)

export default function Home() {
    const data = {
        labels: ['mon', 'Tues', 'Weds', 'Thurs', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Last Week',
                data: [0, 1, 2,5,4,2],
                width: 1,
                backgroundColor: 'rgb(181, 219, 255)'
            },
            {
                label: 'This Week',
                data: [5, 6, 15],
                borderWidth: 1,
                backgroundColor: 'rgb(7, 131, 247)'
            }
        ]
    }
    const options = {
       
        plugins: {
            legend: {
                display: true,
                
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
        animation:{
            duration:2000
        },
       
      
    };

    const donutData={
        labels:[
            'Red',
            'Blue',
            'Violet'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(7, 131, 247)',
                'rgb(161, 94, 255)'
            ],
            hoverOffset: 4
        }]
    }
    const donutOptions = {
        cutout: 125, 
        plugins: {
            title: {
                display: true,
                text: 'Donut Chart Title',
                fontSize: 16,
            },
            legend: {
                position: 'bottom'
            },
           
        }
    }





    return (
        <>

            <Grid container  >
                <Grid item xs={4}>
                    <div className="flex flex-1 bg-blue-300  m-2 justify-between p-3 rounded-2xl">
                        <div className="card flex flex-col w-full">
                            <div className="header flex justify-between">
                                <div >
                                    <Typography variant="h4" sx={{ color: 'rgb(108, 115, 127)' }}>Total Book</Typography>
                                </div>
                                <div>
                                    <GiBlackBook size={50}></GiBlackBook>

                                </div>
                            </div>

                            <div className="flex">
                                <div className="count">
                                    <Typography fontSize={40}>0</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="flex flex-1 bg-red-300  m-2 justify-between p-3 rounded-2xl">
                        <div className="card flex flex-col w-full">
                            <div className="header flex justify-between">
                                <div >
                                    <Typography variant="h4" sx={{ color: 'rgb(108, 115, 127)' }}>Total Issued</Typography>
                                </div>
                                <div>
                                    <AiOutlineSmile size={50}></AiOutlineSmile>

                                </div>
                            </div>

                            <div className="flex">
                                <div className="count">
                                    <Typography fontSize={40}>0</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="flex flex-1 bg-orange-300  m-2 justify-between p-3 rounded-2xl">
                        <div className="card flex flex-col w-full">
                            <div className="header flex justify-between">
                                <div >
                                    <Typography variant="h4" sx={{ color: 'rgb(108, 115, 127)' }}>Total Student</Typography>
                                </div>
                                <div>
                                    <PiStudentLight size={50}></PiStudentLight>

                                </div>
                            </div>

                            <div className="flex">
                                <div className="count">
                                    <Typography fontSize={40}>0</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid  item xs={8}>
                    <div className="p-5 rounded-2xl bg-white mr-5" >
                        <Typography variant="h6">User's Activity</Typography>
                        <Bar data={data} options={options}></Bar>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="p-3 bg-white rounded-2xl" >
                        <Doughnut data={donutData} options={donutOptions} ></Doughnut>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}