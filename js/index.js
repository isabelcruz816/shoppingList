const main = () => {
  $('#addBtn').click(function() {
    event.preventDefault();
    let input = $('#inputText').val();
    if (input == '') {
      $('#message').text('First type an item');
    } else {
      let newItem =
        '<li class="card">' +
        input +
        "<br><button class='checkBtn'>Check</button>" +
        "<button class='deleteBtn'>Delete</button>" +
        '</li>';
      $('#shoppingList').append(newItem);
      $('#message').text(' ');
      $('#inputText').val('');
    }
  });

  $('#shoppingList').on('click', '.checkBtn', function(e) {
    e.preventDefault();
    if (
      $(this)
        .parent()
        .css('text-decoration') === 'line-through solid rgb(0, 0, 0)'
    ) {
      $(this)
        .parent()
        .css('text-decoration', 'none');
    } else {
      $(this)
        .parent()
        .css('text-decoration', 'line-through solid rgb(0, 0, 0)');
    }
  });

  $('#shoppingList').on('click', '.deleteBtn', function(e) {
    $(this)
      .parent()
      .remove();
  });
};
main();
