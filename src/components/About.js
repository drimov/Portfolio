import { Component } from "react";
import {
  Section,
  Container,
  Content,
  Media,
  Columns,
  Card,
} from "react-bulma-components";

export default class About extends Component {
  render() {
    return (
      <Section id="presentation_page">
        {/* Présentation */}
        <Container breakpoint="fluid">
          <Media>
            <Media.Item align="left">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 className="title is-6">présentation</h3>
            </Content>
            <Media.Item align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>
          <Columns>
            <Columns.Column size="one-fifth" id="photo">
              <img src="./img/icons/profile.png" width="250" />
            </Columns.Column>
            <Columns.Column>
              <p className="subtitle is-4 has-text-centered">
                <span className="has-text-weight-bold is-italic">Bonjour</span>,
                je suis Dimitri
              </p>
            </Columns.Column>
          </Columns>

          <Columns>
            <Columns.Column>
              <Card>
                <Card.Image size={64} src="./img/icons/terminal.svg" />
                <Card.Content>
                  <Content>
                    D'origine Réunionnais, baigné dans un milieu multiculturel,
                    curieux de nature et passionnée de nouvelle technologie,
                    notamment la programmation. La vocation de développeur
                    logiciel est une étape logique.
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Image size={64} src="./img/icons/graduation-cap.svg" />
                <Card.Content>
                  <Content>
                    Issue de la filière de L' AFPA à Caen, j'ai pu acquérir et
                    enrichir mes compétences dans la programmation.Par la suite
                    je suis devenu autodidacte et je me forme sur différents
                    technologies tant au niveau du design que les langages de
                    programmation.
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Image size={64} src="./img/icons/code.svg" />
                <Card.Content>
                  <Content>
                    Riche des enseignements professionnel reçus et toujours dans
                    l'expérimentation de nouvelle technologie, je mes à
                    disposition mes compétences pour des futurs projets dans le
                    cadre de mon statut de Freelance.
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    );
  }
}
