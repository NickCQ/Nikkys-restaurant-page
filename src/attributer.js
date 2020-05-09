function attributer(el, attrs) {
    if(!el.style.cssText){
      el.style.cssText=attrs;
    } else{
      if(el.style.cssText.slice(-1)==';'){
        el.style.cssText+=attrs;
      } else{
        el.style.cssText+=';'+attrs;
      }
    }
  }
export {attributer}