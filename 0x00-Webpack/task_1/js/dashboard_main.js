import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

const button = $('<button>Click here to get started</button>');

$('body').append(button);
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
};

button.on('click', debounce(updateCounter, 500));
