function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    document.getElementById('items').appendChild(li);
    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener("click", deleteItem);
    li.appendChild(remove);
    document.getElementById('items').appendChild(li);
    function deleteItem(){
        li.remove();
    }
    document.getElementById('newItemText').value = '';
}
