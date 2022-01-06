import { Component } from "react/cjs/react.production.min";

class MyWork extends Component {
  render() {
    return (
      <Section id="formations_page">
        {/* Formations */}
        <Container breakpoint="fluid">
          <Media>
            <Media.Item align="left">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 className="title is-6">formations</h3>
            </Content>
            <Media.Item align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>

          {/* listes des expériences */}
        </Container>
      </Section>
    );
  }
}
