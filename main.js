let ball = document.getElementById('float-circle');
let counter = document.getElementById('counter');
let bounceNumber = 0;
let resetButton = document.getElementById('reset');

// function lifting the ball
function up(){
  ball.style.bottom = '300px';
}

//function dropping the ball
function down(){
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);

//Creating the bounce counter function
function bounceCounter() {
  if (ball.style.bottom == '50px') {
    return counter.innerHTML = bounceNumber++;
  }
};

ball.addEventListener('transitionend', bounceCounter);

//function resetting the bounceCounter implementing ECMAScript 6;

resetButton.addEventListener('click', () => {
  bounceNumber = 0;
  return counter.innerHTML = 0;
});