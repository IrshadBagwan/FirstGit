const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');
const filter = document.getElementById('filter');


form.addEventListener('submit',addItem);

itemlist.addEventListener('click', removeItem);


filter.addEventListener('keyup', filterItems);



function addItem(e){
    e.preventDefault();
     // get input value
    const newItem = document.getElementById('item').value;
    const item1 = document.getElementById('item1').value;

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
     // Add text node with Input value

     li.appendChild(document.createTextNode(newItem+item1));

     // create delete button element
     const deleteBtn = document.createElement('button');
     
     // Add classes to delete button
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     //Append text Node
     deleteBtn.appendChild(document.createTextNode('X'));

      //Append button to li
     li.appendChild(deleteBtn);

     // Append li to list
     itemlist.appendChild(li);

     const edit = document.createElement('button');
     // edit Button
     edit.className='btn btn-danger btn-sm float-right edit';
     //Append text Node
     edit.appendChild(document.createTextNode('Edit'));

      //Append button to li
     li.appendChild(edit);

     // Append li to list
     itemlist.appendChild(li);
}

function removeItem(e){
   if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
          const li = e.target.parentElement;
          
          itemlist.removeChild(li);
      }
   }
}


//filter Items
function filterItems(e){
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get list
    const items = itemlist.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
          const itemName = item.firstChild.textContent;
          if(itemName.toLocaleLowerCase().indexOf(text) != -1){
              item.style.display='block';

          }else{
              item.style.display='none';
          }
    });



}