
let newbtn = document.querySelector('.btn');
let h1 = document.querySelector('.head')

 newbtn.addEventListener('click', function(){
    

    const r = Math.floor(Math.random()*255 + 1);
    const g = Math.floor(Math.random()*255 + 1);
    const b = Math.floor(Math.random()*255 + 1);

    let newColor = `rgb(${r},${g},${b})`;
    document.body.style.background= newColor;

    head.innertext = newColor;
 })

