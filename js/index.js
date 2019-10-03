$(document).ready(function main() {
  $('#addBtn').click(function() {
    event.preventDefault();
    let input = $('#inputText').val();
    if (input == '') {
      $('#message').text('First type an item');
    } else {
      let newItem =
        '<li>' +
        input +
        '</li>' +
        "<button id='checkBtn'>Check</button>" +
        "<button id='deleteBtn'>Delete</button>";
      $('#shoppingList').append(newItem);
      $('#message').text(' ');
    }
  });

  $('#shoppingList').on('click', 'button', function() {
    event.preventDefault();
    if ($(this).prop('id') === 'checkBtn') {
      if (
        $(this)
          .parent()
          .css('text-decoration') == 'line-through'
      ) {
        $(this)
          .parent()
          .css('text-decoration', 'none');
      } else {
        $(this)
          .parent()
          .css('text-decoration', 'line-through');
      }
    } else {
      $(this)
        .parent()
        .remove();
    }
  });
});
