import { Component } from 'react';
import {Form, Button} from "react-bulma-components";
//import Field from 'react-bulma-components'

const { Input, Field, Control, Label,Textarea } = Form;
const textFullname = ''
const textEmail = ''
const textMessage = ''


export default class FormsPage extends Component {

    constructor() {
        super()

        this.state = {
            fullname: textFullname,
            email: textEmail,
            message: textMessage,
        }

    }
    /*
    tryClear(event) {

        // valeur dans l'input
        let valeur = event.target.value
        let nom = event.target.name.toString()
        console.log(nom)
        //console.log(this.state.value)

        if (valeur == textFullname || valeur == textEmail || valeur == textMessage) {
            this.setState((prevState) => {
                console.log(prevState)
                {prevState.fullname = ""}
            })
        }

    }*/
    handleChange() {
        console.log("test");
      }

    render() {
        return (
            <Field id="SendMessage">
                <Field className="is-grouped ">
                    <Control className="is-expanded">
                        <Input type="text" name="fullname" placeholder="Votre nom et prénom" value={this.state.fullname} onChange={this.handleChange} />
                    </Control>
                    <Control className="is-expanded">
                        <Input type="email" name="email" placeholder="Votre email" value={this.state.email} onChange={this.handleChange} />
                    </Control>
                </Field>
                <Field>
                    <Textarea size="large" name="message" placeholder="Votre message.." value={this.state.message} onChange={this.handleChange} />
                </Field>
                <Button type="primary" id="btn_envoyer">envoyer</Button>
            </Field>
        );
    }
}
