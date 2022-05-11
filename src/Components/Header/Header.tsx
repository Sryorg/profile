import { Container, Content } from './styles';
import profileImg from '../../assets/profile.jpg'


export function Header() {
  return (
    <Container>
        <img src={profileImg} alt="" />
        <div>
          <h1>Jorge Luis</h1>
          <p>Dev Front-End</p>
        </div>
    </Container>
  )
}

export function Project() {
  return (
    <Content>
          <div className="posts">
            <h1>My Projects</h1>
            <a href="https://github.com/Sryorg">Veja todos</a>
          </div>
    </Content>
  )
}

