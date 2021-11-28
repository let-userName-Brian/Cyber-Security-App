import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import FavNewsCard from './FavNewsCard'
import Modal from '@mui/material/Modal';
import Jump from 'react-reveal/Jump';
import FavNewsExpanded from './FavNewsExpanded'


export default function FavoritesNews({ favorites, setFavorites, news }) {

    const [liked, setLiked] = useState(true);
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
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={{ height: '150vh', backgroundColor: 'rgb(39,39,39)', color: 'white', width: '100vw', margin: -7 }} >
        < Grid container spacing={5} marginLeft={'3%'} width="90vw">
            {favorites?.map((item) => (
                    <Grid item xs={12} sm={6} md={3.2}  >
                        <Jump>
                            <FavNewsCard
                                key={item.title}
                                article={item}
                                id={item.id}
                                handleOpen={handleOpen}
                                setFavorites={setFavorites}
                                favorites={favorites}
                            />
                        </Jump>
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
                            <FavNewsExpanded
                                id={`${isClicked.id}-${isClicked.title}`}
                                className="article-expanded"
                                article={isClicked}
                                handleNavigate={handleNavigate}
                            />
                        </Box>
                    )}
                </Modal>
        </Grid>
        </Box>
    )
}