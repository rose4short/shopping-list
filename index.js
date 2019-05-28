function htmlForItem(itemString){
    return `<li>
    <span class="shopping-item">${itemString}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

function addItemsToList(){
    $('#js-shopping-list-form').submit(event =>{

        event.preventDefault();
        //find item string from input text
        const itemString= $(event.currentTarget).find('input[type="text"]').val()
        //make a list item for the string 
        const listItem= htmlForItem(itemString)
        //put list item at the bottom of list
        $('ul.shopping-list').append(listItem);
    })
}
$(addItemsToList);