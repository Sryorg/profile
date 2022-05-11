import { Container, Content } from './styles';

import mapPinImg from '../../assets/map-pin.svg';
import briefcaseImg from '../../assets/briefcase.svg';
import githubImg from '../../assets/github.svg';
import linkedinImg from '../../assets/linkedin.svg';
import twitterImg from '../../assets/twitter.svg';
import mailImg from '../../assets/mail.svg';


export function About() {
  return(
    <Container>
      <div>
        <dl>
          <dt><img src={mapPinImg} alt=""/>Brasil</dt>
          <dt><img src={briefcaseImg} alt="" />Rocketseat</dt>
          <dt><img src={githubImg} alt="" />Sryorg - Jorge Luis</dt>
          <dt><img src={linkedinImg} alt="" />Jorge</dt>
          <dt><img src={twitterImg} alt="" />@Jlar_0</dt>
          <dt><img src={mailImg} alt="" />jorgeluis20022020@gmail.com</dt>
        </dl>
      </div>
    </Container>
  )
}

export function Tec() {
  return (
    <Content>
      <table>
      <tr>
        <th>
          <p>
            Javascript
          </p>
        </th>
        <td>
          <p>
            React
          </p>
        </td>
        <td>
          <p>
            NodeJS
          </p>
        </td>
      </tr>
      <tr>
        <th>
          <p>
            GIT
          </p>
        </th>
        <td>
          <p>
            GITHUB
          </p>
        </td>
        <td>
          <p>
            HTML
          </p>
        </td>
      </tr>
      <tr>
        <th>
          <p>
            CSS
          </p>
        </th>
      </tr>
      </table>
    </Content>
  )
}