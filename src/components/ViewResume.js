import { Component } from "react";
import {
  Button,
  Container,
  Content,
  Image,
  Media,
  Section,
} from "react-bulma-components";


const urlPdf = "https://drive.google.com/file/d/1Qz4OMaEyOBoJqtzfC0NYUQx5cO3OdGR_/view?usp=sharing";
// const urlPdf = "cv_last.pdf";
export default class ViewResume extends Component {
  render() {
    return (
      <Section id="view_resume">
        <Container breakpoint="fluid">
          <Content>
            <h2 className="title is-2">mon cv</h2>
          </Content>
          <Content>
            <p>
              La synthèse de mon parcours et de mes expériences sont disponibles
              en version pdf ci dessous.
            </p>
          </Content>
          <Content>
            <a href={urlPdf} download={true}>
              <Button>
                <Media>
                  <Media.Item>
                    <p>résumé</p>
                  </Media.Item>
                  <Media.Item>
                    <Image src="./img/icons/download.svg" size={32} />
                  </Media.Item>
                </Media>
              </Button>
            </a>
          </Content>
        </Container>
      </Section>
    );
  }
}
