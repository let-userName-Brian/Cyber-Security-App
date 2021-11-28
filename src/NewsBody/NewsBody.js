import React, { useState } from 'react'
import Roll from 'react-reveal/Roll';
import { Grid } from '@mui/material'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NewsCard from './NewsCard';
import ArticleExpanded from './ArticleExpanded';



export default function NewsBody({ news, favorites, setFavorites }) {

    //modal
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState([]);

    const handleOpen = (id) => {
        setIsClicked(news.find(x => x.id === id));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsClicked({});
    };

    const handleNavigate = (url) => {
        window.open(url, '_blank');
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={{ height: '120vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '110%', margin: -7, overflow: 'hidden' }} >
            < Grid container spacing={5} marginLeft={'1%'} >
                {news?.map((item) => (
                    <Grid item xs={12} sm={6} md={3.5}  >
                        <Roll right>
                            <NewsCard
                                key={item.title}
                                article={item}
                                id={item.id}
                                handleOpen={handleOpen}
                                setFavorites={setFavorites}
                                favorites={favorites}
                            />
                        </Roll>
                    </Grid>
                ))}
                <Modal
                    open={open}
                    onClose={() => handleClose()}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {isClicked && (
                        <Box sx={style}>
                            <ArticleExpanded
                                id={`${isClicked.id}-${isClicked.title}`}
                                className="article-expanded"
                                article={isClicked}
                                handleNavigate={handleNavigate}
                            />
                        </Box>
                    )}
                </Modal>
            </Grid>
        </Box >
    )
}
