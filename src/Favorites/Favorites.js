import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


export default function Favorites(  ) {

   

    return (
        <Box sx={{ height: '150vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
        < Grid container spacing={5} marginLeft={'3%'} width="90vw">
            <Grid item xs={12} md={6} lg={4} >
                <Typography variant="h4" component="h1" align="center">
                  Favs boiler page
                </Typography>
            </Grid>
        </Grid>
        </Box>
    )
}