import logo from "./logo.svg";
// import './sass/mystyles.scss';
import "./css/mystyles.css";
import {
  Section,
  Container,
  Navbar,
  Content,
  Columns,
  Media,
  Tile,
  Card,
  Box,
  Image,
  Footer,
} from "react-bulma-components";
import LoadLangagesProg from "./components/LoadLangagesProg";
// import FormsPage from './components/FormsPage';

function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  return (
    <Section id="portfolio">
      {/* Body */}
      <Section id="home_page">
        <Container fluid>
          {/* Header */} {/*Title x= 273 y=454 L:1380 T=404.5*/}
          <Navbar is-transparent>
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
                  <p class="title is-5 has-text-white">A propos</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p class="title is-5 has-text-white">Compétences</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p class="title is-5 has-text-white">Formations</p>
                </Navbar.Item>
                <Navbar.Item hrf="#">
                  <p class="title is-5 has-text-white">Contact</p>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
          <Media>
            {" "}
            {/*x:273px y:454px L:1380 T:404,5px*/}
            <Media.Item
              renderAs="string"
              align="left"
              className="is-hidden-touch"
            >
              <img src="./img/icons/hook_left.svg" width="165" />
            </Media.Item>
            <Content id="text_home">
              <h2 class="title is-2">dimitri lhopital</h2>
              <h1 class="title">android</h1>
              <h2 class="title is-2">développeur</h2>
            </Content>
            <Media.Item
              renderAs="string"
              align="right"
              className="is-hidden-touch"
            >
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

      <Section id="presentation_page">
        {/* Présentation */}
        <Container fluid>
          <Media>
            <Media.Item renderAs="string" align="left" class="">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 class="title is-6">présentation</h3>
            </Content>
            <Media.Item renderAs="string" align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>
          <Columns>
            <Columns.Column size="one-fifth" id="photo">
              <img src="./img/icons/photo.svg" width="250" />
            </Columns.Column>
            <Columns.Column>
              <p class="subtitle is-4 has-text-centered">
                <span class="has-text-weight-bold is-italic">Bonjour</span>,
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
                    D'origine Réunionnais, baigné dans un
                    milieu multiculturel, curieux de nature et passionnée de
                    nouvelle technologie, notamment la programmation. La
                    vocation de développeur logiciel est une étape logique.
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

      <Section id="competences_page">
        {/* Compétences */}
        <Container fluid>
          <Media>
            <Media.Item renderAs="string" align="left">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 class="title is-6">compétences</h3>
            </Content>
            <Media.Item renderAs="string" align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>
          <Box>
            <Tile kind="ancestor">
              <Tile size={4} vertical>
                <Tile size={8}>
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
                              <h4 class="subtitle is-7">Environnements</h4>
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
                                size={48}
                              />
                            </Media.Item>
                            <Media.Item>
                              <Image
                                src="./img/icons/linux_logo.svg"
                                size={48}
                              />
                            </Media.Item>
                          </Media>
                        </Content>
                      </Card.Content>
                    </Card>
                  </Tile>
                </Tile>

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
                            <h4 class="subtitle is-7">Savoir Faire</h4>
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
                          et dysfonctionnements qui pourrait survenir sur le
                          site.
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
                            <h4 class="subtitle is-7">
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
                      <Content></Content>
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
                            <h4 class="subtitle is-7">Outils</h4>
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

      <Section id="formations_page">
        {/* Formations */}
        <Container fluid>
          <Media>
            <Media.Item renderAs="string" align="left">
              <img src="./img/icons/hook_left.svg" width="60" />
            </Media.Item>
            <Content>
              <h3 class="title is-6">formations</h3>
            </Content>
            <Media.Item renderAs="string" align="right">
              <img src="./img/icons/hook_right.svg" width="60" />
            </Media.Item>
          </Media>

          {/* listes des expériences */}
        </Container>
      </Section>

      <Footer>
        <Section id="contact">
          {/* contact */}
          <Container fluid>
            <Media>
              <Media.Item renderAs="string" align="left">
                <img src="./img/icons/hook_left.svg" width="60" />
              </Media.Item>
              <Content>
                <h3 class="title is-6">me contacter</h3>
              </Content>
              <Media.Item renderAs="string" align="right">
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
                      N'hésitez pas à me contacter pour votre projet
                      Personnalisé ou une demande de devis.
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content id="form_bg">
                    <Content>
                      <new FormsPage />
                      <p>
                        Ps : Afin d'obtenir un devis précis, je vous prie de
                        détaillé l'ensemble de votre projet.
                      </p>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>

              {/* Carte + détails */}
              <Columns>
                <div id="separation"></div>
                <Card>
                  <Card.Header>
                    <Card.Header.Title
                      renderAs="p"
                      className="has-text-white is-uppercase is-3"
                    >
                      détails
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content id="form_bg">
                    <Content id="details">
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/pin_icon.svg"
                            alt="localisation pin"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">Réunion</Content>
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
                        <Content renderAs="p">dimitrilho@gmail.com</Content>
                      </Media>
                      <Media>
                        <Media.Item align="left">
                          <Image
                            src="./img/icons/link_icon.svg"
                            alt="link"
                            size={24}
                          />
                        </Media.Item>
                        <Content renderAs="p">
                          http://dimitrilhopital.com
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
          <Columns>
            <Columns.Column size="one-third" offset="one-third">
              <div id="rs_separation"></div>
              <Media id="reseaux_sociaux">
                <Media.Item>
                  <Image
                    src="./img/icons/facebook_icon.svg"
                    size={96}
                    alt="facebook"
                  />
                </Media.Item>
                <Media.Item>
                  <Image
                    src="./img/icons/twitter_icon.svg"
                    size={96}
                    alt="twitter"
                  />
                </Media.Item>
              </Media>
            </Columns.Column>
            <Columns.Column>
              <p id="by_author">2021 © Drimov</p>
            </Columns.Column>
          </Columns>
        </Section>
      </Footer>
    </Section>
  );
}

export default App;
