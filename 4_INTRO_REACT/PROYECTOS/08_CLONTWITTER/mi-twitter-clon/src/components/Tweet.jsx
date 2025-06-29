import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

const Tweet = ({ tweet, onLike, onDelete }) => {

    return (
        <Card
      sx={{
        mb: 2,
        boxShadow: 2,
        borderRadius: 2,
        p: 1,
        backgroundColor: '#3b3b3b',
      }}
    >
      <CardContent sx={{ position: 'relative' }}>
        <IconButton
          onClick={() => onDelete(tweet.id)}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'gray' }}
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>

        <Typography variant="body1" sx={{ mb: 1 }} align='justify'>
          {tweet.text}
        </Typography>

        {/* Usuario y fecha */}
        <Typography variant="subtitle2" color="text.secondary"align='left'> 
          @{tweet.username} · {tweet.date}
        </Typography>

        
        <Box sx={{ mt: 1 }}>
          <IconButton onClick={() => onLike(tweet.id)} size="small" color="gray">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption" component="span">
            {tweet.likes}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    );
};

export default Tweet;