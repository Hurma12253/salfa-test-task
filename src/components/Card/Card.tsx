import MUICard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Typography } from '@mui/material'
import { ICardProps } from './Card.types'

const SCard: React.FC<ICardProps> = ({ image, title, description, liked }) => {
    return (
        <MUICard sx={{ display: "flex", flexDirection: "column", maxWidth: 345, minWidth: 260, width: "100%" }}>
            <CardMedia
                sx={{ height: 200 }}
                image={image}
                title={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ textOverflow: "ellipsis", overflow: "hidden", color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="favorite" size="large" color={liked ? "error" : undefined}>
                    <FavoriteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </CardActions>
        </MUICard>
    )
}

export default SCard