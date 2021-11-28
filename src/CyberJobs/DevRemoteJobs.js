import React from 'react'
import { Button, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function DevRemoteJobs({devJobs}) {

    //console.log('jobs at devRemoteJobs',devJobs)
    return (
        <Box sx={{ height: '150vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
        < Grid container spacing={5} marginLeft={'3%'} width="90vw">
            <Grid item xs={12} md={6} lg={4} >
            <Typography variant="h4" component="h1" align="center">
                   Dev Remote Jobs
                </Typography>
                {/* {devJobs?.map((job, index) => {
                    return (
                        <Box sx={{ width: '100%', height: '100%', backgroundColor: 'rgb(39,39,39)', color: 'white', margin: 7 }} key={index}>
                            <Typography variant="h5" gutterBottom>
                                {job?.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {job?.company_name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {job?.description}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {job?.salary}
                            </Typography>
                            <Button variant="contained" color="primary" href={job?.url}>
                                Apply
                            </Button>
                        </Box>
                    )
                })} */}
            </Grid>
        </Grid>
        </Box>
    )
}