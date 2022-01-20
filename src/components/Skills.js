import { Component } from "react";
import {
  Section,
  Container,
  Content,
  Media,
  Card,
  Tile,
  Box,
  Image,
  Progress,
} from "react-bulma-components";

const langages = [
  {
    langue: "Android",
    level: 60,
  },
  {
    langue: "kotlin",
    level: 55,
  },
  {
    langue: "Java",
    level: 60,
  },
  {
    langue: "Php",
    level: 80,
  },
  {
    langue: "Pl/Sql",
    level: 75,
  },
  {
    langue: "HTML/CSS",
    level: 70,
  },
  {
    langue: "Javascript",
    level: 65,
  },
];
const is_even = "is_even";
const color_even = "primary";
const is_uneven = "is_uneven";
const color_uneven = "danger";
const mapIter = langages.values();

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.loadProg = this.loadProg.bind(this);
  }
  loadProg() {
    let listItems = [];
    listItems.length = langages.length;

    for (let i = 0; i < langages.length; i++) {
      let valeur = "";
      let couleur = "";

      if (i % 2 === 0) {
        valeur = is_even;
        couleur = color_even;
      } else {
        valeur = is_uneven;
        couleur = color_uneven;
      }

      listItems.push(
        <Media key= {langages[i]["langue"]} renderAs="article" className="list-skill">
          <Media.Item renderAs="p" align="left" className="stats_skills">
            {langages[i]["langue"]}
          </Media.Item>
          <Content>
            <Progress
              className={valeur}
              color={couleur}
              max={100}
              value={langages[i]["level"]}
            />
          </Content>
        </Media>
      );
    }
    return <div className="text_skill list-skill">{listItems}</div>;
  }
  render() {
    return (
      <Section id="competences_page">
        {/* Compétences */}
        <Container breakpoint="fluid">
          <Media>
            <Media.Item align="left">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 className="title is-6">compétences</h3>
            </Content>
            <Media.Item align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>
          <Box>
            <Tile kind="ancestor">
              <Tile size={4} vertical>
                {/* <Tile size={8}> */}
                  <Tile renderAs="article" kind="child">
                    {/* Environnements */}
                    <Card>
                      <Card.Header>
                        <Card.Header.Title>
                          <Media>
                            <Media.Item align="left">
                              <Image
                                src="./img/icons/arrow_left.svg"
                                size={24}
                              />
                            </Media.Item>
                            <Content>
                              <h4 className="subtitle is-7">Systèmes</h4>
                            </Content>
                            <Media.Item align="right">
                              <Image
                                src="./img/icons/arrow_right.svg"
                                size={24}
                              />
                            </Media.Item>
                          </Media>
                        </Card.Header.Title>
                      </Card.Header>

                      <Card.Content>
                        <Content>
                          <p>
                            J'utilise essentiellement deux systèmes
                            d'exploitation : Linux et Windows.
                          </p>
                          <Media id="logo_env">
                            <Media.Item>
                              <Image
                                src="./img/icons/windows_logo.svg"
                                size={64}
                              />
                            </Media.Item>
                            <Media.Item>
                              <Image
                                src="./img/icons/linux_logo.svg"
                                size={64}
                              />
                            </Media.Item>
                          </Media>
                        </Content>
                      </Card.Content>
                    </Card>
                  </Tile>
                {/* </Tile> */}

                {/* Savoir faire */}
                <Tile renderAs="article" kind="child">
                  <Card>
                    <Card.Header>
                      <Card.Header.Title>
                        <Media>
                          <Media.Item align="left">
                            <Image
                              src="./img/icons/bracket_left.svg"
                              size={24}
                            />
                          </Media.Item>
                          <Content>
                            <h4 className="subtitle is-7">Savoir Faire</h4>
                          </Content>
                          <Media.Item align="right">
                            <Image
                              src="./img/icons/bracket_right.svg"
                              size={24}
                            />
                          </Media.Item>
                        </Media>
                      </Card.Header.Title>
                    </Card.Header>

                    <Card.Content>
                      <Content>
                        <p>
                          La méthode Agile est mon premier point fort, elle
                          consiste en une meilleur approche du projet via un
                          processus de dialogue avec le client.
                        </p>
                        <p>
                          Pour les projets nécessitant une base de donnée, j'ai
                          la méthode Merise à disposition qui vise a structuré
                          la base de donnée pour éviter les différents problèmes
                          qui pourrait survenir sur le site.
                        </p>
                      </Content>
                    </Card.Content>
                  </Card>
                </Tile>
              </Tile>

              <Tile kind="parent" size={8} vertical>
                {/* Langage de programmations */}
                <Tile renderAs="article" kind="child">
                  <Card>
                    <Card.Header>
                      <Card.Header.Title>
                        <Media>
                          <Media.Item align="left">
                            <Image
                              src="./img/icons/accolade_left.svg"
                              size={24}
                            />
                          </Media.Item>
                          <Content>
                            <h4 className="subtitle is-7">
                              Langages de programmation
                            </h4>
                          </Content>
                          <Media.Item align="right">
                            <Image
                              src="./img/icons/accolade_right.svg"
                              size={24}
                            />
                          </Media.Item>
                        </Media>
                      </Card.Header.Title>
                    </Card.Header>
                    <Card.Content>
                      <Content>
                        {this.loadProg()}
                      </Content>
                    </Card.Content>
                  </Card>
                </Tile>

                {/* Outils */}
                <Tile renderAs="article" kind="child">
                  <Card>
                    <Card.Header>
                      <Card.Header.Title>
                        <Media>
                          <Media.Item align="left">
                            <Image src="./img/icons/hook_left.svg" size={24} />
                          </Media.Item>
                          <Content>
                            <h4 className="subtitle is-7">Outils</h4>
                          </Content>
                          <Media.Item align="right">
                            <Image src="./img/icons/hook_right.svg" size={24} />
                          </Media.Item>
                        </Media>
                      </Card.Header.Title>
                    </Card.Header>
                    <Card.Content>
                      <Content>
                        <p>
                          La partie design est développé sous les deux outils :
                          Affinity designer pour l'interface graphique en
                          général et en second Affinity photo pour les retouches
                          ou créations.
                        </p>
                        <p>
                          La programmation elle, ce fait par le biais de Visual
                          Studio Code.
                        </p>
                      </Content>
                    </Card.Content>
                  </Card>
                </Tile>
              </Tile>
            </Tile>
          </Box>
        </Container>
      </Section>
    );
  }
}
