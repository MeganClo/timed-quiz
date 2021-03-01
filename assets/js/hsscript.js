// targetting my list
var userScores = document.getElementById("userScores");

// getting my scores from localstorage
var savedScores = JSON.parse(localStorage.getItem("scores") || "[]");

// adding scores as li elements to page
userScores.innerHTML = 
savedScores.map(score => {
    return `<li>${score.userName} - ${score.score}</li>`;
}).join("");