for(let i=0;i<256;++i){
    let el = document.createElement('div');
    el.setAttribute('class','squares');
    document.querySelector('#content').appendChild(el);
}

var $w = window.innerWidth;
if($w>1600){
    document.querySelector('#content').style.left=(($w-1600)/2)+'px';
    document.querySelector('#clear').style.left=(($w-1600)/2)+'px';
}

var btn_clear = document.querySelector('#clear');
btn_clear.addEventListener('click', (event) => {
    event.target.classList.toggle('on');
})

var cont = document.querySelectorAll('.squares');
cont.forEach((e) => {
    e.addEventListener('click', (event) => {
        if(document.querySelector('#clear').getAttribute('class')!='off'){
            event.target.innerHTML = '<div class="squares"></div>'
        }
    })

    e.addEventListener('mousemove',(event) => {
        event.target.style.backgroundColor = 'deeppink';
        let x = event.clientX;
        let y = event.clientY;
        let dot = document.createElement('dot');
        dot.setAttribute('class','dots');
        if($w>1600){
            dot.style.left = x-(($w-1600)/2)+'px';
        }
        else{
            dot.style.left = x; 
        }
        dot.style.top = y - 50 + 'px';
        event.target.appendChild(dot);
    })

    e.addEventListener('mouseleave',(event) => {
        event.target.style.backgroundColor = 'fuchsia';
    })
})