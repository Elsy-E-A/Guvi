const ele=document.createElement("div")
ele.setAttribute("id","div_id")
ele.setAttribute("class","container")

ele.innerHTML=`<div class="container" style="color:silver">Let the countdown begin</div>`;
document.body.append(ele)

setTimeout(function () {
  ele.innerHTML=`<div class="container" style="color:violet">10</div>`;
 
  setTimeout(function () {
    ele.innerHTML=`<div class="container" style="color:pink">9</div>`;
    
    setTimeout(function () {
      ele.innerHTML=`<div class="container" style="color:orange">8</div>`;
     
      setTimeout(function () {
        ele.innerHTML=`<div class="container" style="color:brown">7</div>`;
     
        setTimeout(function () {
          ele.innerHTML=`<div class="container" style="color:green">6</div>`;
       
          setTimeout(function () {
            ele.innerHTML=`<div class="container" style="color:yellow">5</div>`;
         
            setTimeout(function () {
              ele.innerHTML=`<div class="container" style="color:red">4</div>`;
                                          
    setTimeout(function () {
      ele.innerHTML=`<div class="container" style="color:olive">3</div>`;
        
setTimeout(function () {
  ele.innerHTML=`<div class="container" style="color:grey">2</div>`;

  setTimeout(() => {
    ele.innerHTML=`<div class="container" style="color:gold">1</div>`;

    setTimeout(() => {
      
      ele.innerHTML=`<div class="container" style="color:white">Happy new year</div>`;
    }, 700);
  }, 800);
}, 900);
}, 1000);
}, 1100);
}, 1200);
}, 1300);
}, 1400);
}, 1600);
}, 1800);
}, 2000);
