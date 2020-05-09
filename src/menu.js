import {attributer} from './attributer.js';

function menu(cont){
    let menu=document.createElement('div');
    let menuspan=document.createElement('div');
    
    let csstext='font-family: "Jost", sans-serif;display:flex;justify-content:center;align-items:center';
    menuspan.setAttribute('class','menu');
    attributer(menu,csstext)
    let csstext2='box-shadow: 1px -1px 30px 13px rgba(168,57,57,1);text-shadow: 3px 2px 14px rgba(255, 255, 255, 1);color:#DFCC28;padding:10px;font-size:50px;border-radius:15px;width:740px;height:420px;display:grid;grid-template-columns: auto auto auto auto;grid-gap: 5px;';
    attributer(menuspan,csstext2);
    let nombresdecomidas=['Pollo a la brasa','Copa de helado','Lomo saltado','Arroz chaufa','Lomo fino','Pollo a la plancha','Lomo a lo pobre','Ensalada César'];
    let urlcomidas=['https://larepublica.pe/resizer/xF-fzdVIOPaM0dQ_teS93VjtRBA=/1200x660/top/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/CL2G2CFAGZAKXEEWZTP7T3TTK4.jpg','https://www.vitamixespana.com/recetas/wp-content/uploads/2017/05/helado-de-vainilla-vitamix.jpg','https://www.comeperuano.pe/wp-content/uploads/2019/05/Receta-de-Lomo-Saltado-peruano.jpg','https://comidasperuanas.net/wp-content/uploads/2016/11/Arroz-chaufa-1200x720.jpg','https://lh3.googleusercontent.com/proxy/VuESHoQER77t6Vvd3bCMi-CZY3y5id223zzT8A2RIkuGmeaQcMGIG85gEjM0vxXXtkXTJZ_QmhXxAneNwBXYIubBHIy33d9N7mSd9Ee6FO7aESZxm9UCpcfjAnfpVAMlGpiatsh0h6C0uwDzzJLGJF3d8ybcmPALXc7BUIlNektyoY_SVy7WonzrEUDXYYcj5Kz7d-3Qzkp0LiHLzFI','https://recetasdecomidamexicana.org/wp-content/uploads/2017/03/pollo-a-la-plancha.jpg','https://www.delperu.org/wp-content/uploads/2019/08/bistec-a-lo-pobre_800x534.jpg','https://www.divinacocina.es/wp-content/uploads/ensalada-cesar-rapida-facil.jpg'];
    for(var i=0;i<nombresdecomidas.length;i++){
        let platocontainer=document.createElement('div');
        let plato=document.createTextNode(`${nombresdecomidas[i]}`);
        let fotodecomida=urlcomidas[i];
        let csstext3=`text-shadow: 3px 2px 14px rgba(0, 0, 0, 1);border-radius:5px;transition:all 1s;display:flex;justify-content:center;align-items:center;font-size:30px;background:url(${fotodecomida});background-size:cover;`
        attributer(platocontainer,csstext3);
        platocontainer.appendChild(plato);
        menuspan.appendChild(platocontainer);
        platocontainer.addEventListener('mouseover',()=>{
            platocontainer.style.color='black';
            platocontainer.style.fontSize='35px';
        });
        platocontainer.addEventListener('mouseout',()=>{
            platocontainer.style.color='#DFCC28';
            platocontainer.style.fontSize='30px';
        });
    }
    
    menu.appendChild(menuspan);
    cont.appendChild(menu);
}

export {menu};