const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
  e.preventDefault();
  const item = e.target.firstElementChild.value;
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  li.appendChild(text);
  li.setAttribute('id', item);
  itemsList.appendChild(li);
  e.target.reset();
}

const removeItem = (e) => {
  const target = e.target;
  if(target.id === target.textContent){
    target.parentNode.removeChild(target);
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);

// const addItem = (e) => {
//   e.preventDefault();  
//   const value = e.target.firstElementChild.value;
//   const item = {
//     value,
//     done: false
//   }

//   items.push(item);
//   createListItems(items, itemsList);
//   localStorage.setItem('items', JSON.stringify(items));
//   e.target.reset();
// }

// const toggleChecked = (e) => {
//   if(!e.target.matches('input')) return;
//   const target = e.target;
//   const index = target.dataset.index;
//   items[index].done = !items[index].done;
//   localStorage.setItem('items', JSON.stringify(items));
//   createListItems(items, itemsList);
// }

// const createListItems = (items = [], list) => {
//   list.innerHTML = items.map((item, i) => {
//     return `
//       <li>
//         <input type="checkbox" data-index=${i} id="${i}" ${item.done ? 'checked' : ''}/>
//         <label for="${i}">${item.value}</label>
//       </li>
//     `;
//   }).join('');
// }

// addItems.addEventListener('submit', addItem);
// itemsList.addEventListener('click', toggleChecked);
// createListItems(items, itemsList);


