import React from 'react'
import { Box, styled } from "@mui/material"
import { BarChart, PieChart, useDrawingArea } from '@mui/x-charts';
import Styles from "../../../styles/main page components/Dashboard/Dashboardgraph.module.css";

const Dahboardgraph = () => {

    // Line chart

    const totalProjectData = [25, 31, 44, 53, 18, 49, 61];
    const completedProjectData = [17, 23, 22, 50, 12, 40, 42];
    const xLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];


    // pie chart

    const data = [
        { value: 41, label: 'In Progress' },
        { value: 15, label: 'In Review' },
        { value: 32, label: 'To Do' },
        { value: 40, label: 'Done' },
    ];

    const size = {
        width: 200,
        height: 250,
    };

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }

    return (
        <>
            <div className="row mt-1">
                <div className="col-8">
                    <div className={`card p-3 ${Styles.graph_card}`}>
                        <span className={`${Styles.graph_name}`}>Overall Projects</span>
                        <Box sx={{ width: '100%', height: 250 }}>
                            <BarChart
                                series={[
                                    { data: completedProjectData, label: 'Completed', id: 'completedprojectId' },
                                    { data: totalProjectData, label: 'Total Projects', id: 'totalprojectId' },
                                ]}
                                xAxis={[{ data: xLabels, height: 28 }]}
                                yAxis={[{ width: 50 }]}
                            />
                        </Box>
                    </div>
                </div>
                <div className="col-4">
                    <div className={`card p-3 ${Styles.graph_card}`}>
                        <span className={`${Styles.graph_name}`}>Project Overview</span>
                        <PieChart series={[{ data, innerRadius: 60 }]} {...size}>
                            <PieCenterLabel>Total Tasks</PieCenterLabel>
                        </PieChart>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dahboardgraph;