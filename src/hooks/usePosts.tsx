import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Post {
  id: number;
  user: string;
  content: string;
  type: string;
  createdAt: string;
}

type PostInput = Omit<Post, 'id' | 'createdAt'>;

interface PostsProviderProps {
  children: ReactNode;
}

interface PostsContextData {
  posts: Post[];
  createPost: (post: PostInput) => Promise<void>;
}

const PostsContext = createContext<PostsContextData>(
  {} as PostsContextData
);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get('post')
      .then(response => setPosts(response.data.posts))
  }, []);

  async function createPost(postInput: PostInput) {
    const response = await api.post('/post', {
      ...postInput,
      createdAt: new Date(),
    })
    const { post } = response.data;

    setPosts([
      ...posts,
      post,
    ]);
  }

  return (
    <PostsContext.Provider value={{ posts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext)

  return context;
}