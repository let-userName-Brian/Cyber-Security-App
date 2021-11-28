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

export default function TipsCards({item, favTips, setFavTips}) {

    const [liked, setLiked] = useState(false);
;
    const handleFavClick = (e) => {
        e.preventDefault();
        setLiked(!liked);
        if(!liked){
            setFavTips([...favTips, item]);
        }else{
            setFavTips(favTips.filter(tip => tip.id !== item.id));
        }
    }
    console.log('favTips at Tips screen:', favTips);
    return (
       <Card sx={{  ':hover': {
                boxShadow: 150,
               },
                maxWidth: 400, borderRadius: 5 }} 
                >
                <CardContent>
                <Fade left>
                    <Typography gutterBottom variant="h5" component="div" id={item.id}>
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id={item.id}>
                        {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id={item.id}>
                        {item?.Ul?.map((item) => (
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
