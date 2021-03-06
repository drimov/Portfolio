import { Component, useState } from "react";
import {
  Section,
  Container,
  Navbar,
  Content,
  Media,
} from "react-bulma-components";

// const [isActive, setisActive] = useState(false);
// const isState = false;

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addClass: "",
    };

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(e) {
    this.setState((state) => ({
      isActive: state.isActive == true ? false : true,
    }));
    this.setState((state) => ({
      addClass: state.isActive == true ? "is-active" : "",
    }));
    console.log(this.state.isActive);
    console.log(this.state.addClass);
  }
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
              {/* this.setState(({isActive})=>({isActive: !isActive})) */}
              <Navbar.Burger onClick={this.handleOnclick} className={this.state.addClass}/>
            </Navbar.Brand>
            {/*Navbar x= 670 y= 50 L:1200 T:150*/}
            <Navbar.Menu className={this.state.addClass}>
              <Navbar.Container align="right">
                <Navbar.Item href="#presentation_page">
                  <p className="title is-5 has-text-white">A propos</p>
                </Navbar.Item>
                <Navbar.Item href="#view_resume">
                  <p className="title is-5 has-text-white">Mon cv</p>
                </Navbar.Item>
                <Navbar.Item href="#competences_page">
                  <p className="title is-5 has-text-white">Compétences</p>
                </Navbar.Item>
                <Navbar.Item href="#contact">
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
