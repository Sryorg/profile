import Modal from 'react-modal';
import { Container, PostTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg';
import { FormEvent, useState} from 'react';
import { usePosts } from '../../hooks/usePosts';

interface NewPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPostModal({ isOpen, onRequestClose }: NewPostModalProps) {
  const { createPost } = usePosts();

  const [user, setUser] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('tip');

  async function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();

    await createPost({
      user,
      content,
      type
    })

    setUser('');
    setContent('');
    setType('tip');
    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar"/>
      </button>

    <Container onSubmit={handleCreateNewPost}>
      
      <h2>Criar post</h2>

      <input
       placeholder="Usuário"
       value={user}
       onChange={event => setUser(event.target.value)}
      />

      <input
       placeholder="Conteúdo"
       value={content}
       onChange={event => setContent(event.target.value)}

      />

      <PostTypeContainer>
        <RadioBox
          type="button"
          onClick={() => { setType('tip')}}
          isActive={type === 'tip'}
          activeColor="white"
        >
          <span>Dica</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => { setType('coment')}}
          isActive={type === 'coment'}
          activeColor="purple"
        >
          <span>Comentario</span>
        </RadioBox>
      </PostTypeContainer>

      <button type="submit">
        Postar
      </button>
    </Container>
   </Modal>
  )
};