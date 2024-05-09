var guessedWord = 'apple';
var currentGuessedWord = '_'.repeat(guessedWord.length);
var maxAttempts = 6;
var attemptsLeft = maxAttempts;

function sendMessage(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        var input = document.getElementById("messageInput").value.toLowerCase();

        if (input.length === 1 && input.match(/[a-z]/)) {

            var indices = [];
            for (var i = 0; i < guessedWord.length; i++) {

                if (guessedWord[i] === input) {
                    indices.push(i);
                }
            }
            if (indices.length > 0) {

                for (var index of indices) {

                    currentGuessedWord = currentGuessedWord.substr(0, index) + input + currentGuessedWord.substr(index + 1);
                }
            } else {
                // Decrease life
                attemptsLeft--;
                var lifeContainer = document.querySelector('.life');
                var lifeImages = lifeContainer.querySelectorAll('img');
                if (lifeImages.length > 0) {
                    lifeContainer.removeChild(lifeImages[0]);
                }
                if (lifeImages.length == 0) {
                   
                    var mineMessages = document.querySelector(".mine.messages");
                    var message = document.createElement("div");
                    message.classList.add("message");
                    message.textContent = "게임 오버! 정답은 " + guessedWord + "입니다.";
                    mineMessages.appendChild(message);
                    document.getElementById("messageInput").value = '';
                    return;
                }
            }

         
            if (currentGuessedWord === guessedWord) {
                var mineMessages = document.querySelector(".mine.messages");
                var message = document.createElement("div");
                message.classList.add("message");
                message.textContent = "정답입니다! " + guessedWord;
                mineMessages.appendChild(message);
                document.getElementById("messageInput").value = '';
                return;
            }

         
            var mineMessages = document.querySelector(".mine.messages");
            var message = document.createElement("div");
            message.classList.add("message");
            message.textContent = currentGuessedWord + " (남은 시도: " + attemptsLeft + ")";
            mineMessages.appendChild(message);
            document.getElementById("messageInput").value = '';
        } else {
       
            var mineMessages = document.querySelector(".mine.messages");
            var message = document.createElement("div");
            message.classList.add("message");
            message.textContent = "문자 하나만 입력하세요!";
            mineMessages.appendChild(message);
            document.getElementById("messageInput").value = '';
        }
    }
}

let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
    form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
    form.classList.remove("change-form");
});
