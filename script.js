
let number = Number(localStorage.getItem('task_count'));
let task = '';
let n = 0;
//localStorage.clear();

if (number == null) {
  localStorage.setItem('task_count', 0);
  number = 0;
}


for (let i = 1; i <= number; i++) {
  task = localStorage.getItem('task_value[' + i + ']');
  addTask();
}


function addTask () {
      $('.form-add-task').find('#add-task').append('<div data order="' + n + '">' +
      '<input type="checkbox" class="checkbox"/>' +
      '<input type="text" name="input" value="' + task + '"/>' +
      '<button class="clear" type="button" name="button">' + 'x' + '</button>' +
      '</div>');
      ++n;
}




  $('[type="checkbox"]').click(function () {

      $(this).parent().find('[type="text"]').attr('disabled', true).toggleClass('checked');
      $(this).attr('checked', true);


      if (!$(this).parent().find('[type="text"]').hasClass('checked')) {
        $(this).parent().find('[type="text"]').attr('disabled', false);
        $(this).attr('checked', false);
      }

  });




  $('.clear').click(function () {

    $(this).parent().remove();



    localStorage.removeItem('task_value[' + number + ']', task);
    localStorage.setItem('task_count', --number);
  });



$('.create-task').submit(function () {
  event.preventDefault();

  let input = $(this).find('input[type=text]');
  let task = input.val();
  let number = Number(localStorage.getItem('task_count'));
  input.val('');


  try {
    if (number == 3) {

      $('.create-task').find('input[type=text]').attr( "disabled", true );
      $('.create-task').find('input[type=submit]').attr( "disabled", true );
      localStorage.setItem('task_count', number);
      console.log(task);

      throw "N == 3";
    }
    addTask();

    localStorage.setItem('task_count', ++number);
    localStorage.setItem('task_value[' + number + ']', task);
    console.log(localStorage);
    //alert(task);
  }

  catch (e) {
    console.log(e);
  }
  if (number < 3) {

      $('.create-task').find('input[type=text]').attr( "disabled", false );
      $('.create-task').find('input[type=submit]').attr( "disabled", false );

  }

});
