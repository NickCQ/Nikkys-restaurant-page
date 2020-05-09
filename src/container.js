import {attributer} from './attributer.js'
import {title} from "./title";
import {tabber} from "./tabber";
import {home} from './home';
function container(){
    let container=document.querySelector('#content');
    let csstext='box-shadow: 5px 10px 19px red;display:grid;grid-template-columns: 180px 770px;grid-template-rows: 150px 450px;background:linear-gradient(45deg,#F38E8E, #EC6868);grid-template-areas: "tabber title" "tabber .";'
    attributer(container,csstext);
    title(container);
    tabber(container);
    home(container);
}

export {container}