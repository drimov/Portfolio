import React, { Component } from "react";

import {
  Container,
  Content,
  Columns,
  Media,
  Card,
  Image,
  Footer,
  Section,
} from "react-bulma-components";
import { FunctionForm } from "./FormsPage";

export default class FooterPage extends Component {
  render() {
    return (
      <Footer>
        <Section id="contact">
          {/* contact */}
          <Container breakpoint="fluid">
            <Media>
              <Media.Item align="left">
                <img src="./img/icons/hook_left.svg" width="60" />
              </Media.Item>
              <Content>
                <h3 className="title is-6">me contacter</h3>
              </Content>
              <Media.Item align="right">
                <img src="./img/icons/hook_right.svg" width="60" />
              </Media.Item>
            </Media>

            <Columns>
              {/* Formulaire */}
              <Columns.Column>
                <Card>
                  <Card.Header>
                    <Card.Header.Title
                      renderAs="p"
                      className="has-text-white has-text-weight-normal"
                    >
                      N'hésitez pas à me contacter pour un projet intéressant ou
                      innovant.
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content id="form_bg">
                    <Content>
                      <FunctionForm />
                      {/* <div id="form_page"> */}
                      <p>
                        Ps : Afin d'obtenir une vision concrète, je vous prie de
                        détaillé l'ensemble de votre projet.
                      </p>
                      {/* </div> */}
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>

              {/* Carte + détails */}
              <Columns>
                <div id="separation"></div>
                <Card id="details">
                  <Card.Header>
                    <Card.Header.Title
                      renderAs="p"
                      className="has-text-white is-uppercase is-3"
                    >
                      détails
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content id="form_bg">
                    <Content>
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/pin_icon.svg"
                            alt="localisation pin"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">Dunkerque</Content>
                      </Media>
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/phone_icon.svg"
                            alt="phone"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">06.93.92.50.23</Content>
                      </Media>
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/mail_icon.svg"
                            alt="mail"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">
                          <a href="mailto:dimitrilho@gmail.com">
                           Mon email
                          </a>
                        </Content>
                      </Media>
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/github_icon.svg"
                            alt="link"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">
                          <a href=" https://github.com/drimov">
                            Mon Github
                          </a>
                        </Content>
                      </Media>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns>
            </Columns>
          </Container>
        </Section>
        <Section id="banner">
          <Media>
            <Media.Item>
              <p className="footer-p">Bulma by</p>
            </Media.Item>
            <Media.Item>
              <p className="footer-p">Drimov</p>
            </Media.Item>
            <Media.Item>
              <p className="footer-p"> 2022 ©</p>
            </Media.Item>
          </Media>
        </Section>
      </Footer>
    );
  }
}
