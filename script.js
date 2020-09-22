
let number = Number(localStorage.getItem('task_count'));
let task = '';
//localStorage.clear();

if (number == null) {
  localStorage.setItem('task_count', 0);
  number = 0;
}

let n = 0;

function addTask () {
    let count = 0;

    try {
      if (n == 3) {
        $('#planner').find('input[type=text]').attr( "disabled", true );
        localStorage.setItem('task_count', 3);

        throw "N == 3";
      }
      $('#input-box').find('.task-input-box').append('<div data order="' + number + '">' +
      '<input type="radio" aria-label="Radio button for following text input" />' +
      '<input type="text" aria-label="Text input with radio button" name="input[]" value="' + task + '"/>' +
      '<button class="clear" type="button" name="button">' + 'x' + '</button>' +
      '</div>');

      localStorage.setItem('task_count', ++number);
      localStorage.setItem('task_value[' + number + ']', task);

      ++n;
    }
    catch (e) {
      console.log(e);
    }

//console.log(n);
  $('#planner').find('input[type=text]').attr( "disabled", false );



  $('div').find('input[type=radio]').click(function () {
    event.preventDefault();
      ++count;
      //alert();

      if (count % 2 == 1 ) {
        $('#input-box').find('input[type=radio]').attr('checked', true);
        $('#input-box').find('input[type=text]').attr( "disabled", true );
        console.log(count);
      }
      else if (count % 2 == 0) {
        $('#input-box').find('input[type=radio]').attr('checked', false);
        $('#input-box').find('input[type=text]').attr( "disabled", false );
        console.log(count);
      }

  });

  $('.clear').click(function () {
    event.preventDefault();
  //alert();

    $('#input-box').find('input[type=radio]').attr('checked', false);
    $('#input-box').find('input[type=text]').val('').attr("disabled", false);
    count = 0;
  });

}



$('.input-group').click(function () {   //$('.input-group').submit(function () {
  event.preventDefault();
  //alert();
  let input = $(this).find('.form-main');
  let task = input.val();
  let number = Number(localStorage.getItem('task_count'));
  input.val('');

  addTask();

});
