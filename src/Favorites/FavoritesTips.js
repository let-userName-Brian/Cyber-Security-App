import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import FavTipsCard from './FavTipsCard';

export default function FavoritesTips({ favTips, setFavTips }) {

    const [liked, setLiked] = useState(true);





    console.log('favTips at Fav Tips Screen:', favTips);
    return (
        <Box sx={{ height: '120vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
            < Grid container spacing={5} marginLeft={'3%'} width="90vw">
                {favTips?.map((item) => {
                    return (
                        <Grid item xs={12} md={6} lg={3.2} >
                            <FavTipsCard
                                key={item.title}
                                tip={item}
                                id={item.id}
                                description={item.description}
                                setFavTips={setFavTips}
                                favTips={favTips}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}