

const Tweet = ({ tweet, onLike }) => {
    return (
        <div className="tweet">
            <p>{tweet.text}</p>
            <p>
                <strong>@{tweet.username}</strong>
            </p>
            <button onClick={() => onLike(tweet.id)}>
                🤍 {tweet.likes}
            </button>
        </div>
    );
};

export default Tweet;