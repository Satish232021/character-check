const total = document.querySelector('.total');
const remaining = document.querySelector('.remaining');
const content = document.querySelector('.content');

content.value = JSON.parse(localStorage.getItem('content'));
total.innerText = JSON.parse(localStorage.getItem('total'));
remaining.innerText = JSON.parse(localStorage.getItem('remaining'));
local();

function local() {
    content.addEventListener('input', () => {
        total.innerText = content.value.length;
        remaining.innerText = 100 - content.value.length;
        if ( remaining.innerText <= 8 ){
            remaining.style.color = 'red';
        }else if( remaining.innerText <= 15 && remaining.innerText > 8){
            remaining.style.color = '#ba1919';
        }else{
            remaining.style.color = 'black';
        }
    
        if( total.innerText >= 92 ){
            total.style.color = 'red';
        }else if( total.innerText >= 85 && total.innerText < 92 ){
            total.style.color = '#ba1919';
        }else{
            total.style.color = 'black';
        }
    
        localStorage.setItem('content', JSON.stringify(content.value));
        localStorage.setItem('total', JSON.stringify(total.innerText));
        localStorage.setItem('remaining', JSON.stringify(remaining.innerText));
    });

}

