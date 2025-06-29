import Tweet from "./Tweet"
import { Box } from "@mui/material";

const TweetList = ({tweets, onLike, onDelete}) => {
  return (
    <Box>
        {tweets.map((tweet)=>(
            <Tweet 
            key = {tweet.id} 
            tweet ={tweet} 
            onLike={onLike} 
            date={tweet.date}
            onDelete={onDelete}
            />
        ))}
    </Box>
  );
};

export default TweetList