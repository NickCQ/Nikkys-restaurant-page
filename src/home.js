import {attributer} from './attributer.js';

function home(cont){
    let home=document.createElement('div');
    let homespan=document.createElement('span');
    let hometext=document.createTextNode('Pollería familiar con más de 10 años de experiencia atendiendo a nuestros clientes con los mejores platos.');
    let csstext='font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center';
    homespan.setAttribute('class','menu');
    attributer(home,csstext)
    let csstext2='box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(255, 255, 255, 1);background:url("https://lh3.googleusercontent.com/proxy/G60qJbt9OJ_1q4nDvMBjbYGLJxMA3svrcRPPUguikD28-0Azw0tbvioZjwMaW9gg2eVUKArWMhJ-lj3LAJP5SNrmXZdaq2y2KHAJZYU5yKdD830igIK6Jf0");background-size:760px 440px;color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:flex;align-items:center;';
    attributer(homespan,csstext2);
    homespan.appendChild(hometext);
    home.appendChild(homespan);
    cont.appendChild(home);
}

export {home};
