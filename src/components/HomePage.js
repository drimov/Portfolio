import { Component } from "react";
import {
  Section,
  Container,
  Navbar,
  Content,
  Media,
} from "react-bulma-components";

export default class HomePage extends Component {
  render() {
    return (
      <Section id="home_page">
        <Container breakpoint="fluid">
          {/* Header */} {/*Title x= 273 y=454 L:1380 T=404.5*/}
          <Navbar transparent="true">
            {/* Logo */}
            <Navbar.Brand>
              <Navbar.Item>
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
              </Navbar.Item>
              <Navbar.Burger />
            </Navbar.Brand>
            {/*Navbar x= 670 y= 50 L:1200 T:150*/}
            <Navbar.Menu>
              <Navbar.Container align="right">
                <Navbar.Item hrf="#">
                  <p className="title is-5 has-text-white">A propos</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p className="title is-5 has-text-white">Compétences</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p className="title is-5 has-text-white">Formations</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p className="title is-5 has-text-white">Contact</p>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
          <Media>
            {" "}
            {/*x:273px y:454px L:1380 T:404,5px*/}
            <Media.Item align="left" className="is-hidden-touch">
              <img src="./img/icons/hook_left.svg" width="165" />
            </Media.Item>
            <Content id="text_home">
              <h2 className="title is-2">dimitri lhopital</h2>
              <h1 className="title">android</h1>
              <h2 className="title is-2">développeur</h2>
            </Content>
            <Media.Item align="right" className="is-hidden-touch">
              <img src="./img/icons/hook_right.svg" width="165" />
            </Media.Item>
          </Media>
          <div id="down">
            <a>
              <img
                src="./img/icons/arrow_down.svg"
                alt="arrow down"
                width="75"
                height="42.9"
              />
            </a>
          </div>
        </Container>
      </Section>
    );
  }
}
