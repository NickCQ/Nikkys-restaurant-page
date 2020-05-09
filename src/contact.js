import {attributer} from './attributer.js';

function contact(cont){
    let contact=document.createElement('div');
    let contactspan=document.createElement('span');
    let contacttext=document.createTextNode('Dirección: Av. Honorio Delgado 215, San Martín de Porres 15102 Teléfono: (01) 4822890');
    let csstext='font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center';
    contactspan.setAttribute('class','menu');
    attributer(contact,csstext)
    let csstext2='box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(0, 55, 175, 1);background:url("https://lh3.googleusercontent.com/proxy/ba2PlEVMGgOZRL7eD4JlCNSEVpHLS_fg3F_QlqgU3L80W4ioHHru3j-_iIcHD52kyGZMQpNIcjeO3LjwxE3nkQ7UUkhFIzrjmRqNnbEDm7z70sB1kmAVoRwn");background-size:760px 440px;color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:flex;align-items:center;';
    attributer(contactspan,csstext2);
    contactspan.appendChild(contacttext);
    contact.appendChild(contactspan);
    cont.appendChild(contact);
}

export {contact};