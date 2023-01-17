// const headertitle = document.getElementById('header-title');
// console.log(headertitle);
// // headertitle.textContent = "hello";
// // headertitle.innerText = "goodbye";
// headertitle.style.borderBottom = "solid 3px #000";


// const additem = document.getElementsByClassName('title');
// console.log(additem);
// console.log(additem[0])
// additem[0].style.fontWeight='bold';
// additem[0].style.color='green';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent='hello2';
// items[2].style.backgroundColor="green";

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }

// const list = document.getElementsByClassName('listGroup');
// console.log(list)
// list[0].textContent="new element edited with class and tag name";
// list[0].style.fontWeight='bold';
// list[0].style.display='block';
// list[0].style.border='1px solid rgba(0,0,0,.125)';
// list[0].style.padding='0.75rem 1.25rem';
// list[0].style.margin.bottom='-1px';

// const li = document.getElementsByTagName('li');
// console.log(li);
// li[4].textContent="new element edited with class and tag name";
// li[4].style.fontWeight='bold';
// li[4].style.display='block';
// li[4].style.border='1px solid rgba(0,0,0,.125)';
// li[4].style.padding='0.75rem 1.25rem';


// const item2 = document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor="green";
// item2.style.color="green";

// const item3 = document.querySelector(".list-group-item:nth-child(3)");
// item3.style.display="none";

// const odd=document.querySelectorAll('li:nth-child(odd)');
// console.log(odd)

// for(let i=0;i<odd.length;i++){
//    odd[i].style.backgroundColor="green";
// }

// const itemlist = document.querySelector('#items');
// // ParentNode
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor="#f4f4f4";
// // console.log(itemlist.parentNode.parentNode)
   
//  // Parentelement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemlist.parentElement.parentElement)


// //ChildNodes
// console.log(itemlist.childNodes)

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor="red";

// //FirstChild
// console.log(itemlist.firstChild);

// //FirstElementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent="Hello 1";

// //lastChild
// console.log(itemlist.lastChild);

// //lastElementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent="Hello 4";

// //nextSibling
// console.log(itemlist.nextSibling)

// //nextelementsibling
// console.log(itemlist.nextElementSibling)

// //previoussibling
// console.log(itemlist.previousSibling)

// //previouselementsibling
// console.log(itemlist.previousElementSibling)

// //CreateElement


// //create a div
// const newDiv = document.createElement('div');
// //Add class
// newDiv.className="hello";

// //Add id
// newDiv.id="hello1";

// //Add attr
// newDiv.setAttribute('title','Hello Div');

// //create text node
// const newDivText = document.createTextNode("hello world");

// //Add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');



// console.log(newDiv);
// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv,h1)

// // listtag
// const newli = document.createElement('li');
// newli.className='list-group-item';

// newnodetext = document.createTextNode('Hello');
// newli.appendChild(newnodetext);

// const cont = document.querySelector('#items');
// const first  = document.querySelector('#first');

// cont.insertBefore(newli,first);