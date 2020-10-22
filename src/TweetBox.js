import React, {useState} from 'react';
import "./TweetBox.css";
import {Button, Avatar} from '@material-ui/core';
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            displayName: 'Jonah',
            username: 'jodav',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://camo.githubusercontent.com/b51c8cebe1e552825bb1470a3f5e1b196e3328cd/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f30386235323434313266343237663665633366633430353063636663626332373f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430"
        });
        
        setTweetMessage("");
        setTweetImage("");
  };

    return (
        <div className="tweetBox">
            <form>
        <div className="tweetBox__input">
          <Avatar src="https://camo.githubusercontent.com/b51c8cebe1e552825bb1470a3f5e1b196e3328cd/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f30386235323434313266343237663665633366633430353063636663626332373f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
        </div>
    )
}

export default TweetBox
