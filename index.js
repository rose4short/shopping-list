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
function checkItems(){ 

    $( ".shopping-item-toggle" ).on('click', function(event){
        // find the span 
        console.log('check button clicked')
        let span=$(event.currentTarget).closest("li").find("span.shopping-item");
        //toggle class to the span element
        span.toggleClass( "shopping-item__checked" );
    })
}
function deleteItems(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
         //find closet li and remove it
        $(this).closest('li').remove();
    })
}

$(addItemsToList);
$(checkItems);
$(deleteItems);