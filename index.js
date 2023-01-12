const headertitle = document.getElementById('header-title');
console.log(headertitle);
// headertitle.textContent = "hello";
// headertitle.innerText = "goodbye";
headertitle.style.borderBottom = "solid 3px #000";


const additem = document.getElementsByClassName('title');
console.log(additem);
console.log(additem[0])
additem[0].style.fontWeight='bold';
additem[0].style.color='green';

const items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent='hello2';
items[2].style.backgroundColor="green";

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}



