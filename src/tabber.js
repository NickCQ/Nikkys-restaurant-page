import {attributer} from './attributer.js'
import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';
import { container } from './container.js';


function tabber(cont){
    let tabber=document.createElement('div');
    let csstext='display:flex;flex-direction:column;justify-content:center;align-items:center;grid-area: tabber;'
    attributer(tabber,csstext);
    let Homediv=document.createElement('div');
    let Menudiv=document.createElement('div');
    let Contactdiv=document.createElement('div');
    let Home=document.createTextNode("Home");
    let Menu=document.createTextNode("Menu");
    let Contact=document.createTextNode("Contact");
    Homediv.setAttribute('class','tab');
    Menudiv.setAttribute('class','tab');
    Contactdiv.setAttribute('class','tab');
    let homecss='font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;';
    let menucss='font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;';
    let contactcss='font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;';
    attributer(Homediv,homecss);
    attributer(Menudiv,menucss);
    attributer(Contactdiv,contactcss);
    Homediv.appendChild(Home);
    Menudiv.appendChild(Menu);
    Contactdiv.appendChild(Contact);
    tabber.appendChild(Homediv);
    tabber.appendChild(Menudiv);
    tabber.appendChild(Contactdiv);
    cont.appendChild(tabber);
    Homediv.addEventListener('click',()=>{
        cont.removeChild(cont.children[2]);
        home(cont);
    });
    Menudiv.addEventListener('click',()=>{
        cont.removeChild(cont.children[2]);
        menu(cont);
    });
    Contactdiv.addEventListener('click',()=>{
        cont.removeChild(cont.children[2]);
        contact(cont);
    });
}

export {tabber}