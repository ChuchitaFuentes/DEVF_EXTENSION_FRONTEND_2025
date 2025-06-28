import Tweet from "./Tweet"

const TweetList = ({tweets, onLike}) => {
  return (
    <div>
        {tweets.map((tweet)=>(
            <Tweet key = {tweet.id} tweet ={tweet} onLike={onLike} date={tweet.date}/>
        ))}
    </div>
  );
};

export default TweetList