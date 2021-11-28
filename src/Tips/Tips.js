import React, {useState} from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import data from './Data' 
import TipsCards from './TipsCards'

//tips={tips} favTips={favTips} setFavTips={setFavavTips}
export default function Tips({favTips, setFavTips} ) {

    return (
        <Box sx={{ height: '200vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
        < Grid container spacing={5} marginLeft={'3%'} width="90vw">
            {data?.map((item) => (
                <Grid item xs={12} md={6} lg={3.2} >
                <TipsCards
                key={item.title}
                item={item}
                id={item.id}
                setFavTips={setFavTips}
                favTips={favTips}
                />
            </Grid>
            ))}
        </Grid>
        </Box>
    )
}
