import React,{h,Component} from 'react';
import ReactDOM from "react-dom";
import { Progress, Media, Content } from 'react-bulma-components'

const langages = (
    [
        ['html/css', 70],
        ['php', 80],
        ['javascript', 75],
        ['java', 60],
        ['pl/sql', 75],
        ['android', 50],
        ['vb', 50],
        ['joomla', 45],
        ['react Js', 35]
    ]
)
const is_even = "is_even"
const color_even = "primary"
const is_uneven = "is_uneven"
const color_uneven = "danger"
const mapIter = langages.values()

class LoadLangagesProg extends Component {
    

    loadProg() {
        const listItems = []

        for (let i = 0; i < langages.length; i++) {
            let valeur = ""
            let couleur = ""
            let item = mapIter.next().value

            if (i % 2 === 0) {
                valeur = is_even
                couleur = color_even
            } else {
                valeur = is_uneven
                couleur = color_uneven
            }
            // listItems.push(<div class="item_skill"><p>{item[0]}</p><Progress class={valeur} color={couleur} max={100} value={item[1]} /></div>)
            listItems.push(
                <Media key={item[0]} renderAs="article" className="list-skill">
                    <Media.Item renderAs="p" align="left" className="stats_skills">
                        {item[0]}
                    </Media.Item>
                    <Content>
                        <Progress className={valeur} color={couleur} max={100} value={item[1]} />
                    </Content>
                </Media>
            )
        }
        // console.log(listItems)
        return (<div className="text_skill list-skill">{listItems}</div>)
        // return(listItems)
    }
    // render() {
    //     return this.load()
    // }
}
export default LoadLangagesProg;