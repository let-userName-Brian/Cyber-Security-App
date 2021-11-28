import React from 'react'
import { Divider, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Dashboard() {
    return (
        <Box sx={{ height: '120vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
            < Grid container spacing={5} marginLeft={'0%'} width="90vw" >
                <Grid item xs={12} md={5} lg={3.5} marginTop={'4%'}>
                    <Typography variant="h4" component="h1" >
                        Welcome to your dashboard!
                    </Typography>
                    <Divider color={'white'}/>
                    <Typography variant="h5" component="h2" marginTop={'10%'} >
                        Here you can take a glance at all active cyber attacks taking place right now and interact with the types of attacks.
                    </Typography>
                    <Typography variant="h5" component="h2" marginTop={'8%'} >
                       Feel free to browse through the different options on the left. You can check out the top stories from 
                       HackerNews, add and remove them from your favorites, or even visit the site to read the full story.
                    </Typography>
                    <Typography variant="h5" component="h2" marginTop={'8%'} >
                        Wanna learn some tips on how to better protect yoursefl from cyber attacks? visit the Tips page to see the top 10 ways to protect yourself.
                        You can add those tips to your favorites as well!
                    </Typography>
                    <Typography variant="h5" component="h2" marginTop={'8%'} >
                       If your looking for a job in either Cyber Security or Web Development, you can find it on the Jobs page!
                       We list all remote positions available in the world.
                    </Typography>
                    <Typography variant="h5" component="h2" marginTop={'10%'} >
                        Enjoy!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7} lg={8.5} marginTop={'0%'} >
                    <Box>
                        <iframe width="1100" height="1100" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0" />   
                    </Box>
                    < ArrowRightIcon />if the widget fails to load, please refresh the page!
                </Grid>
            </Grid>
        </Box>
    )
}

