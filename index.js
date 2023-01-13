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

const list = document.getElementsByClassName('listGroup');
console.log(list)
list[0].textContent="new element edited with class and tag name";
list[0].style.fontWeight='bold';
list[0].style.display='block';
list[0].style.border='1px solid rgba(0,0,0,.125)';
list[0].style.padding='0.75rem 1.25rem';
list[0].style.margin.bottom='-1px';

const li = document.getElementsByTagName('li');
console.log(li);
li[4].textContent="new element edited with class and tag name";
li[4].style.fontWeight='bold';
li[4].style.display='block';
li[4].style.border='1px solid rgba(0,0,0,.125)';
li[4].style.padding='0.75rem 1.25rem';


const item2 = document.querySelector(".list-group-item:nth-child(2)");
item2.style.backgroundColor="green";
item2.style.color="green";

const item3 = document.querySelector(".list-group-item:nth-child(3)");
item3.style.display="none";

const odd=document.querySelectorAll('li:nth-child(odd)');
console.log(odd)
for(let i=0;i<odd.length;i++){
   odd[i].style.backgroundColor="green";
}
   
 



