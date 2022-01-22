const list = document.querySelector(".boynames li");
const listInput = document.querySelector('.list-input');

const addlistbutton = document.querySelector(".addListButton");

addlistbutton.addEventListener('click', function(){
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    
    newLi.appendChild(liContent);
    list.appendChile(NewLi);
    
});

