

const Tweet = ({ tweet, onLike, onDelete }) => {

    return (
        <div className="tweet">
            <button
                onClick={() => onDelete(tweet.id)}
                style={{ marginLeft: 10, color: 'gray' }}
            >X</button>
            <p>{tweet.text}</p>
            <p>
                <strong>@{tweet.username}</strong>
            </p>
            <p>{tweet.date}</p>
            <button onClick={() => onLike(tweet.id)}>
                🤍 {tweet.likes}
            </button>

        </div>
    );
};

export default Tweet;