import {attributer} from './attributer.js';
import {home} from './home.js';

function title(cont){
    let title=document.createElement('div');
    let csstext='display:flex;justify-content:center;align-items:center;grid-area: title;'
    attributer(title,csstext);
    let spanrestaurant=document.createElement('span');
    spanrestaurant.setAttribute('class','restaurantname')
    let restaurantname=document.createTextNode("Nikky's");
    let csstext2='color:#DFCC28;flex-direction:column;font-family: "Lobster", cursive;cursor:pointer;transition:all 0.8s;display:flex;width:380px;height:130px;justify-content:center;align-items:center;font-size:100px';
    spanrestaurant.addEventListener('mouseover',()=>{
        spanrestaurant.style.textShadow='5px 3px 8px gray';
    });
    spanrestaurant.addEventListener('mouseout',()=>{
        spanrestaurant.style.textShadow='none';
    });
    attributer(spanrestaurant,csstext2);
    spanrestaurant.appendChild(restaurantname);
    title.appendChild(spanrestaurant);
    cont.appendChild(title);
    spanrestaurant.addEventListener('click',()=>{
        cont.removeChild(cont.children[2]);
        home(cont);
    })
}

export {title}