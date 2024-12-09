import { Link as RouterLink } from 'react-router'
import MUICard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea, IconButton, Link, Typography } from '@mui/material'
import { ICardProps } from './Card.types'
import { Paths } from '../../router/constants'

const SCard: React.FC<ICardProps> = ({ image, title, description, liked, slug }) => {
    const onLikeButtonClick = (event: React.MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
    }

    const onMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    return (
        <Link component={RouterLink} to={Paths.productCardPath + slug} sx={{ maxWidth: 345, minWidth: 260, width: "100%" }} underline='none'>
            <MUICard sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
                <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={image}
                        title={title}
                    />
                    <CardContent sx={{ height: 100 }}>
                        <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ textOverflow: "ellipsis", overflow: "hidden", color: 'text.secondary' }}>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="favorite" size="large" color={liked ? "error" : undefined} onClick={onLikeButtonClick} onMouseDown={onMouseDown}>
                            <FavoriteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </CardActions>
                </CardActionArea>
            </MUICard>
        </Link>
    )
}

export default SCard