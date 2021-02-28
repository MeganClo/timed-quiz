var userScores = document.getElementById("userScores");

var savedScores = JSON.parse(localStorage.getItem("scores") || "[]");

console.log("oldScores: ", savedScores);

userScores.innerHTML = 
savedScores.map(score => {
    return `<li>${score.userName} - ${score.score}</li>`;
}).join("");