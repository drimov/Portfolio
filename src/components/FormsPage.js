// import { forwardRef, useRef, useState } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { Form, Button, Modal, Media, Content } from "react-bulma-components";
import emailjs, { init } from "@emailjs/browser";

const SERVICE_ID = "service_yfuj8xu";
const TEMPLATE_ID = "template_gukpwwi";
const USER_ID = init("user_vUJ1QcoW6Ijs4oyq4vkxO");

export const FunctionForm = () => {
  const formRef = React.useRef();
  const [from_name, setFrom_name] = useState({ nameUser: "" });
  const [nameErr, setNameErr] = useState("is-hidden");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("is-hidden");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("is-hidden");
  const [to] = useState("Dimitri");
  const [modalDisplay, setmodalDisplay] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalClose, setModalClose] = useState(false);

  const regEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const regName = new RegExp(/^[- a-zA-Z]( [a-zA-Z])*/);

  useEffect(() => {}, [modalTitle]);

  useEffect(() => {}, [modalBody]);

  useEffect(() => {}, [modalDisplay]);

  useEffect(() => {}, [modalClose]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      nameErr !== "" &&
      emailErr !== "" &&
      messageErr !== "" &&
      from_name.nameUser !== "" &&
      email !== "" &&
      message !== "" &&
      regName.test(from_name.nameUser) &&
      regEmail.test(email)
    ) {
      sendEmail();
      console.log("gg");
    } else {
      console.log(`nameErr: ${nameErr}`);
      console.log(`emailErr: ${emailErr}`);
      console.log(`messageErr: ${messageErr}`);
      console.log(`name: ${from_name.nameUser}`);
      console.log(`email: ${email}`);
      console.log(`message: ${message}`);

      let titleModal = "Erreur";
      let bodyText = "Le formulaire est vide ou incorrect.";
      setModalTitle(titleModal);
      setModalBody(bodyText);
      setmodalDisplay(true);
    }
  };
  const handleClick = () => {
    setmodalDisplay(false);
  };

  const sendEmail = (e) => {
    const formMail = formRef.current;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formMail, USER_ID).then(
      (result) => {
        setModalTitle("Succès");
        setModalBody("Le formulaire à bien été envoyé.");
        setmodalDisplay(true);
        // console.log(result.text);
        // console.log(formMail);
      },
      (error) => {
        setModalTitle("Erreur");
        setModalBody("Problème avec le serveur.");
        setmodalDisplay(true);
        // console.log(error.text);
      }
    );
  };

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit}>
        <Form.Field id="sendMessage">
          <Form.Control className="reply">
            <Form.Input
              type="text"
              name="to_name"
              placeholder="nom"
              value="Dimitri"
              readOnly={true}
            />
          </Form.Control>
          <Form.Field className="is-grouped is-grouped-multiline">
            <Form.Control className="is-expanded">
              <Form.Input
                type="text"
                name="from_name"
                placeholder="nom"
                onChange={(e) => {
                  setFrom_name({ ...from_name, nameUser: e.target.value });
                  console.log(from_name.nameUser);
                  setNameErr(
                    !(regName.test(e.target.value) && e.target.value.length > 2)
                      ? ""
                      : "is-hidden"
                  );
                }}
              />
              <p className={`is-danger ${nameErr}`}>
                <span>nom requis</span>
              </p>
            </Form.Control>
            <Form.Control className="is-expanded">
              <Form.Input
                type="email"
                name="reply_to"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErr(
                    !regEmail.test(e.target.value) ? "" : "is-hidden"
                  );
                }}
              />
              <p className={`is-danger ${emailErr}`}>
                <span>email incorrect</span>
              </p>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Textarea
              type="text"
              size="large"
              name="message"
              placeholder="Votre message.."
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageErr(e.target.value.length < 15 ? "" : "is-hidden");
              }}
            />
            <p className={`is-danger ${messageErr}`}>
              <span>message doit contenir plus de 15 caractères</span>
            </p>
          </Form.Field>
          <Button type="submit" id="btn_envoyer" value="Send">
            envoyer
          </Button>
        </Form.Field>
      </form>

      <Modal show={modalDisplay} className="is-clipped">
        {/* <Modal.Content> */}
        <Modal.Card>
          <Modal.Card.Header showClose={false}>
            <Modal.Card.Title>{modalTitle}</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                  <p>{modalBody}</p>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer>
            <Button align="right" onClick={handleClick}>
              ok
            </Button>
          </Modal.Card.Footer>
        </Modal.Card>
        {/* </Modal.Content> */}
      </Modal>
    </>
  );
};
