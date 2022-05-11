import { useState } from 'react';
import { About, Tec } from "./Components/About";
import { Body } from "./Components/Body/body";
import { Header, Project } from "./Components/Header/Header";
import { NewPostModal } from './Components/NewPostModal';
import { AddPost, Recent } from "./Components/Post";
import { PostsProvider } from './hooks/usePosts';

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  function handleOpenNewPostModal() {
    setIsNewPostModalOpen(true)
  }

  function handleCloseNewPostModal() {
    setIsNewPostModalOpen(false)
  }

  return (
    <PostsProvider>
    <GlobalStyle />

      <Header />

      <Project />

      <Body />
      
      <Recent onOpneNewPostModal={ handleOpenNewPostModal }/>

      <NewPostModal 
        isOpen={ isNewPostModalOpen }
        onRequestClose={ handleCloseNewPostModal }
      />
      
      <AddPost />
      
      <About />
      
      <Tec />
    </PostsProvider>
  );
}
