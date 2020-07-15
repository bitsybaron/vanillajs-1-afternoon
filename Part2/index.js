console.log('The house always wins.')

let userId = document.getElementById('boi');
let userColor = document.getElementById('gril');

function setCard() {
     const card = document.getElementById(userId.value);
     card.style.color = userColor.value;
}