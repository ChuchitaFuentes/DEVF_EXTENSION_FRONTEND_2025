import { useState } from "react";
import { Typography, TextField, Button, Box } from '@mui/material';

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 3,
        mt: 2,
      }}
    >
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué estás pensando?"
        variant="outlined"
        multiline
        rows={3}
        sx={{
          '& .MuiInputBase-root textarea': {
            color: 'white',
          }
        }}
      />
      <Button type="submit" variant="outlined" color="primary">
        Tweet
      </Button>
    </Box>
  )
}

export default TweetForm;