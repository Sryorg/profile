import {Container} from "./styles";

import folderImg from '../../assets/folder.svg'
import dtmoneyImg from '../../assets/dtmoney.png'

export function Body() {
  return (
    <Container>
      <div>
        <img src={folderImg} alt="" />
        <h1>My Projects</h1>
        <a href="https://github.com/Sryorg/dtmoney">Projeto dtmoney, feito na aula de reactJS.</a>
        <img src={dtmoneyImg} className="dtmoney"  alt="imagem do projeto" />
      </div>
    </Container>
  )
}

