import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


export default function ArticleExpanded({ article, handleNavigate}) {

    return (
        <Box >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {article.title}
            </Typography>
            <Typography id={article.id} sx={{ mt: 2 }}>
                {article.body}
            </Typography>
            <Button onClick={() => handleNavigate(article.link)}>Read more here</Button>
        </Box>
    )
}
