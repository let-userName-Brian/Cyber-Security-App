import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function FavNewsCard({ article, handleOpen, setFavorites, favorites }) {
    //favs
    const [liked, setLiked] = useState(true);

    const handleFavClick = (e) => {
        e.stopPropagation();
        setLiked(!liked);
        if (liked) {
            setFavorites(favorites.filter(fav => fav.id !== article.id));
        } else {
            setFavorites([...favorites, article]);
        }
    }

    return (
            <Card sx={{  ':hover': {
                boxShadow: 150,
               },
                maxWidth: 370, borderRadius: 5 }} 
                handleOpen={handleOpen}
                >
                <CardMedia
                    id={article.id}
                    component="img"
                    height="180"
                    image={article.image}
                    alt={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id={article.id}>
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id={article.id}>
                        {article.date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" >Share</Button>
                    <Button size="small" onClick={() => handleOpen(article.id)}>Learn More</Button>
                    <IconButton aria-label='add to favorites'>
                        {!liked ? (
                            <FavoriteBorderIcon onClickCapture={e => handleFavClick(e)} />
                        ) : (
                            <FavoriteIcon onClickCapture={e => handleFavClick(e)} />
                        )}
                    </IconButton>
                </CardActions>
            </Card>
    )
}
