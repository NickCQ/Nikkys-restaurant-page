!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){e.style.cssText?";"==e.style.cssText.slice(-1)?e.style.cssText+=t:e.style.cssText+=";"+t:e.style.cssText=t}function a(e){let t=document.createElement("div"),n=document.createElement("span"),a=document.createTextNode("Pollería familiar con más de 10 años de experiencia atendiendo a nuestros clientes con los mejores platos.");n.setAttribute("class","menu"),o(t,'font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center');o(n,'box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(255, 255, 255, 1);background:url("https://lh3.googleusercontent.com/proxy/G60qJbt9OJ_1q4nDvMBjbYGLJxMA3svrcRPPUguikD28-0Azw0tbvioZjwMaW9gg2eVUKArWMhJ-lj3LAJP5SNrmXZdaq2y2KHAJZYU5yKdD830igIK6Jf0");background-size:760px 440px;color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:flex;align-items:center;'),n.appendChild(a),t.appendChild(n),e.appendChild(t)}function r(e){let t=document.createElement("div");o(t,"display:flex;flex-direction:column;justify-content:center;align-items:center;grid-area: tabber;");let n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),l=document.createTextNode("Home"),d=document.createTextNode("Menu"),p=document.createTextNode("Contact");n.setAttribute("class","tab"),r.setAttribute("class","tab"),i.setAttribute("class","tab");o(n,"font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;"),o(r,"font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;"),o(i,"font-size:30px;margin:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;width:120px;height:50px;color:#DFCC28;"),n.appendChild(l),r.appendChild(d),i.appendChild(p),t.appendChild(n),t.appendChild(r),t.appendChild(i),e.appendChild(t),n.addEventListener("click",()=>{e.removeChild(e.children[2]),a(e)}),r.addEventListener("click",()=>{e.removeChild(e.children[2]),function(e){let t=document.createElement("div"),n=document.createElement("div");n.setAttribute("class","menu"),o(t,'font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center'),o(n,"box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(255, 255, 255, 1);color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:grid;grid-template-columns: auto auto auto auto;grid-gap: 5px;");let a=["Pollo a la brasa","Copa de helado","Lomo saltado","Arroz chaufa","Lomo fino","Pollo a la plancha","Lomo a lo pobre","Ensalada César"],r=["https://larepublica.pe/resizer/xF-fzdVIOPaM0dQ_teS93VjtRBA=/1200x660/top/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/CL2G2CFAGZAKXEEWZTP7T3TTK4.jpg","https://www.vitamixespana.com/recetas/wp-content/uploads/2017/05/helado-de-vainilla-vitamix.jpg","https://www.comeperuano.pe/wp-content/uploads/2019/05/Receta-de-Lomo-Saltado-peruano.jpg","https://comidasperuanas.net/wp-content/uploads/2016/11/Arroz-chaufa-1200x720.jpg","https://lh3.googleusercontent.com/proxy/VuESHoQER77t6Vvd3bCMi-CZY3y5id223zzT8A2RIkuGmeaQcMGIG85gEjM0vxXXtkXTJZ_QmhXxAneNwBXYIubBHIy33d9N7mSd9Ee6FO7aESZxm9UCpcfjAnfpVAMlGpiatsh0h6C0uwDzzJLGJF3d8ybcmPALXc7BUIlNektyoY_SVy7WonzrEUDXYYcj5Kz7d-3Qzkp0LiHLzFI","https://recetasdecomidamexicana.org/wp-content/uploads/2017/03/pollo-a-la-plancha.jpg","https://www.delperu.org/wp-content/uploads/2019/08/bistec-a-lo-pobre_800x534.jpg","https://www.divinacocina.es/wp-content/uploads/ensalada-cesar-rapida-facil.jpg"];for(var i=0;i<a.length;i++){let e=document.createElement("div"),t=document.createTextNode(""+a[i]);o(e,`text-shadow: 3px 2px 14px rgba(0, 0, 0, 1);border-radius:5px;transition:all 1s;display:flex;justify-content:center;align-items:center;font-size:30px;background:url(${r[i]});background-size:cover;`),e.appendChild(t),n.appendChild(e),e.addEventListener("mouseover",()=>{e.style.color="black",e.style.fontSize="35px"}),e.addEventListener("mouseout",()=>{e.style.color="#DFCC28",e.style.fontSize="30px"})}t.appendChild(n),e.appendChild(t)}(e)}),i.addEventListener("click",()=>{e.removeChild(e.children[2]),function(e){let t=document.createElement("div"),n=document.createElement("span"),a=document.createTextNode("Dirección: Av. Honorio Delgado 215, San Martín de Porres 15102 Teléfono: (01) 4822890");n.setAttribute("class","menu"),o(t,'font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center'),o(n,'box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(0, 55, 175, 1);background:url("https://lh3.googleusercontent.com/proxy/ba2PlEVMGgOZRL7eD4JlCNSEVpHLS_fg3F_QlqgU3L80W4ioHHru3j-_iIcHD52kyGZMQpNIcjeO3LjwxE3nkQ7UUkhFIzrjmRqNnbEDm7z70sB1kmAVoRwn");background-size:760px 440px;color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:flex;align-items:center;'),n.appendChild(a),t.appendChild(n),e.appendChild(t)}(e)})}n.r(t),function(){let e="background:linear-gradient(135deg,#EDE17D, #EC6868); display:flex ;  justify-content: center; align-items: center; width:100%; height:100%;flex-flow:column;";o(document.body,e),o(document.documentElement,e)}(),function(){let e=document.querySelector("#content");o(e,'box-shadow: 5px 10px 19px red;display:grid;grid-template-columns: 180px 770px;grid-template-rows: 150px 450px;background:linear-gradient(45deg,#F38E8E, #EC6868);grid-template-areas: "tabber title" "tabber .";'),function(e){let t=document.createElement("div");o(t,"display:flex;justify-content:center;align-items:center;grid-area: title;");let n=document.createElement("span");n.setAttribute("class","restaurantname");let r=document.createTextNode("Nikky's");n.addEventListener("mouseover",()=>{n.style.textShadow="5px 3px 8px gray"}),n.addEventListener("mouseout",()=>{n.style.textShadow="none"}),o(n,'color:#DFCC28;flex-direction:column;font-family: "Lobster", cursive;cursor:pointer;transition:all 0.8s;display:flex;width:380px;height:130px;justify-content:center;align-items:center;font-size:100px'),n.appendChild(r),t.appendChild(n),e.appendChild(t),n.addEventListener("click",()=>{e.removeChild(e.children[2]),a(e)})}(e),r(e),a(e)}()}]);