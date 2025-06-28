import Tweet from "./Tweet"

const TweetList = ({tweets, onLike, onDelete}) => {
  return (
    <div>
        {tweets.map((tweet)=>(
            <Tweet 
            key = {tweet.id} 
            tweet ={tweet} 
            onLike={onLike} 
            date={tweet.date}
            onDelete={onDelete}
            />
        ))}
    </div>
  );
};

export default TweetList