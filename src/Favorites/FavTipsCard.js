import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';
import Button from '@mui/material/Button';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function FavTipsCard({favTips, setFavTips, tip}) {
    
    const [liked, setLiked] = useState(true);
    
    const handleFavClick = (e) => {
        e.preventDefault();
        setLiked(!liked);
        if(!liked){
            setFavTips([...favTips, tip]);
        }else{
            setFavTips(favTips.filter(fav => fav.id !== tip.id));
        }
    }

    return (
        <Card sx={{  ':hover': {
            boxShadow: 150,
           },
            maxWidth: 400, borderRadius: 5 }} 
            >
            <CardContent>
        <Fade top>
                <Typography gutterBottom variant="h5" component="div" id={tip?.id}>
                {tip?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" id={tip?.id}>
                    {tip?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" id={tip?.id}>
                    {tip?.Ul?.map((item) => (
                            <li key={item}>-{item}</li>
                    ))}
                </Typography>
           </Fade>
            </CardContent>
            <CardActions>
                <Button size="small" >Share</Button>
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
