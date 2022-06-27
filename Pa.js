let winAudio = new Audio("win.mp3");
let FailAudio = new Audio("fail.mp3");
let nearFailAudio = new Audio("nearFail.mp3");
var count = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function() {
    count++;

    const guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    else if(guessNumber !== secretNumber) {
        document.querySelector('.message').textContent = guessNumber > secretNumber ? '🆙 Too high!' : '⬇ Too Low!';
        document.querySelector(".guess").value = '';

        if(count ===4) {
            nearFailAudio.play();
        }
        else if(count ===5) {
            FailAudio.play();
            document.querySelector('.message').innerHTML = '<h4> No attempt left, try again! 😭</h4>'
            checkBtn.disabled = true;
            checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
            checkBtn.style.cursor = "default";
        }
    }
    else if( count ===5 && guessNumber === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.lets-paly').textContent = '🎉congraltions'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '15rem';
        checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
        checkBtn.style.cursor = "default";
        checkBtn.disabled = true;
    
    }
    else if(guessNumber === secretNumber) {
        winAudio.play();
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.lets-paly').textContent = '🎉congraltions'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '15rem';
        checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
        checkBtn.style.cursor = "default";
        checkBtn.disabled = true;
    }
})
const AgainBtn = document.querySelector('.again');
AgainBtn.addEventListener('click', function(){
    count = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("inside the again button", "  "+ secretNumber)
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector(".guess").value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.lets-paly').textContent = 'lets play😎'
    checkBtn.disabled = false;
    checkBtn.style.cursor = "pointer";
    document.querySelector('body').style.backgroundColor = "#88c4ce";
    checkBtn.style.backgroundColor = '#388697';
}) 
