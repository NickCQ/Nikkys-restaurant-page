import {attributer} from './attributer.js'

function bodyformat(){
    let csstext='background:linear-gradient(135deg,#EDE17D, #EC6868); display:flex ;  justify-content: center; align-items: center; width:100%; height:100%;flex-flow:column;'
    attributer(document.body,csstext)
    attributer(document.documentElement,csstext)
    
}

export {bodyformat}
