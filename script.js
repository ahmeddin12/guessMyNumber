'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;

function dispalyMessage(message) {
  document.querySelector('.message').textContent = message;
}
function dispalyScore(score) {
  document.querySelector('.score').textContent = score;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    dispalyMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    dispalyMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      dispalyMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      dispalyScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost the Game!';
      dispalyMessage('💥 You Lost the Game!');
      //document.querySelector('.score').textContent = 0;
      dispalyScore(0);
    }
  }
});

//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// commment edited

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.message').textContent = 'Start guessing...';
  dispalyMessage('Start guessing...');
  //document.querySelector('.score').textContent = score;
  dispalyScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
