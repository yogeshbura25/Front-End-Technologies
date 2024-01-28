let rowContainerEL = document.getElementById('cartRow');
rowContainerEL.classList.add('cart');
let cartHeading = document.createElement('h1');
cartHeading.textContent = 'Add To Cart';
rowContainerEL.appendChild(cartHeading);


let inputContainerEl = document.createElement('div');
inputContainerEl.classList.add('d-flex', 'flex-row', 'justify-content-center');
rowContainerEL.appendChild(inputContainerEl);


let inputEL = document.createElement('input');
inputEL.type = "text";
inputEL.id = 'cartItemTextInput';
inputContainerEl.appendChild(inputEL);


let buttonEL = document.createElement('button');
buttonEL.classList.add('btn', 'btn-primary', 'btn-add');
buttonEL.textContent = 'Add';
buttonEL.id = 'addBtn';
inputContainerEl.appendChild(buttonEL);


let listContainerEL = document.createElement('div');
rowContainerEL.appendChild(listContainerEL);


let listContainerHead = document.createElement('h4');
listContainerHead.textContent = "My Cart items";
listContainerHead.classList.add('list-title')
listContainerEL.appendChild(listContainerHead);


buttonEL.onclick = function() {

    let list = document.createElement('li');
    list.classList.add('list')
    list.textContent = inputEL.value;
    listContainerHead.appendChild(list);


    inputEL.value = '';
}