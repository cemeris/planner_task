
let number = Number(localStorage.getItem('task_count'));
let task = '';
let n = 0;
let n_task = 0;
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
      $('#add-task').find('ul').append('<li data order="' + n + '">' +
      '<input type="checkbox" class="checkbox"/>' +
      '<input class="task" type="text" name="input" value="' + task + '"/>' +
      '<button class="clear" type="button" name="button">' + 'x' + '</button>' +
      '</li>');
      ++n;
      ++n_task;
}


  $('[type="checkbox"]').click(function () {

      $(this).parent().find('[type="text"]').attr('disabled', true).toggleClass('checked');
      $(this).attr('checked', true);
      --n_task;

      $('.clear').click(function () {
        $(this).parent().remove();

        localStorage.removeItem('task_value[' + number + ']', task);
        localStorage.setItem('task_count', number-1);
        if (number == 0) {
          localStorage.setItem('task_count', 0);
          number = 0;
        }

        console.log(n_task);
      });

    //  console.log(n_task);


      if (!$(this).parent().find('[type="text"]').hasClass('checked')) {
        $(this).parent().find('[type="text"]').attr('disabled', false);
        $(this).attr('checked', false);
        n_task = n_task + 2;
        alert(n_task);
      }

      $('.task-counter').find('span').text('' + n_task + '');

  });



$('.task').keypress(function() {
  //localStorage.setItem('task_count', number);
  $(this).val() = localStorage.setItem('task_value[' + number + ']', task);

  //console.log($(this).val());
})



$('.create-task').submit(function () {
  event.preventDefault();

  let input = $(this).find('input[type=text]');
  let task = input.val();
  let number = Number(localStorage.getItem('task_count'));
  input.val('');
  //++n_task;

  $('.task-counter').find('span').replaceWith('' + n_task + '');
console.log(n_task);


  try {
    if (number == 3) {

      $('.create-task').find('input[type=text]').attr( "disabled", true );
      $('.create-task').find('input[type=submit]').attr( "disabled", true );
      localStorage.setItem('task_count', number);
      console.log(task);
      n_task = 3;

      throw "N == 3";
    }
    addTask();
  //  ++n_task;

    localStorage.setItem('task_count', ++number);
    localStorage.setItem('task_value[' + number + ']', task);
    console.log(localStorage);

    $('.task-counter').find('span').replaceWith('' + n_task + '');


  }

  catch (e) {
    console.log(e);
  }
  if (number < 3) {

      $('.create-task').find('input[type=text]').attr( "disabled", false );
      $('.create-task').find('input[type=submit]').attr( "disabled", false );

  }

});
