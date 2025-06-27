import { useState } from 'react'

import './App.css'
import MainContent from './components/MainContent.jsx'
import PostForm from './components/PostForm.jsx'

function App() {
  const [comments, setPosts] = useState([]);

  return (
    <>
      <MainContent>
        <PostForm setPost={setPosts}/>
      </MainContent>
    </>
  )
}

export default App
