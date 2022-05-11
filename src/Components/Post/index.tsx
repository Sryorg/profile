import { usePosts } from "../../hooks/usePosts";
import { Center, Content } from "./styles"

interface RecentProps {
  onOpneNewPostModal: () => void;
}

export function Recent({ onOpneNewPostModal }: RecentProps) {
  return (
    <Content>
      <div>
        New Post
      </div>

      <button type="button" onClick={onOpneNewPostModal}>
        Add Post
      </button>

      
    </Content>
  )
}

export function AddPost() {
  const { posts } = usePosts();
  console.log(posts)

  return (
    <Center>
      

      <table>
        <thead>
          <th>Usuário</th>
          <th>Conteúdo</th>
          <th>Data</th>
        </thead>

        <tbody>
          {posts.map(post => (
              <tr key={post.id}>
                <td>{post.user}</td>
                <td>{post.content}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(post.createdAt)
                  )}
                </td>
              </tr>
            ))};
        </tbody>
      </table>
    </Center>
  )
}