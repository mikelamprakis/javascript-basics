function changeTextContent() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'Hello, JavaScript!';
}

function changeStyle() {
    const div = document.getElementById('myDiv');
    div.style.backgroundColor = 'blue';
    div.style.color = 'white';
    div.style.padding = '10px';
}

function addNewElement() {
    const ul = document.getElementById('myList');
    const li = document.createElement('li');
    li.textContent = 'New Item';
    ul.appendChild(li);
}

function removeElement() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.remove();
}

function toggleClass() {
    const div = document.getElementById('myDiv');
    div.classList.toggle('hidden');
}

function addEventListenerToButton() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
}

function getInputValue() {
    const input = document.getElementById('myInput');
    alert(input.value);
}

function setInputValue() {
    const input = document.getElementById('myInput');
    input.value = 'New Value';
}

function createAndAppendElements() {
    const ul = document.getElementById('myList');
    const items = ['Item 1', 'Item 2', 'Item 3'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}

function cloneElement() {
    const div = document.getElementById('myDiv');
    const clone = div.cloneNode(true);
    document.body.appendChild(clone);
}

function changeAttribute() {
    const img = document.getElementById('myImage');
    img.setAttribute('src', 'new-image.jpg');
}