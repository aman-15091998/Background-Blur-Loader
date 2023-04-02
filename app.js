const main=document.querySelector('.main');
const h= document.querySelector('.secondary');
let count=0;
let opac=100;
let blur=25;
let int = setInterval(incrementCount, 30);
function incrementCount(){
    if(count>99)
    clearInterval(int);
    h.style.opacity=`${opac*0.01}`
    opac--;
    h.innerHTML=`${count}%`;
    count++;

    //for image
    main.style.filter=`blur(${blur}px)`
    blur=blur-0.25;

}