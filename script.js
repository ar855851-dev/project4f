const luckyButton = document.getElementById("luckyButton");
const luckyMessage = document.getElementById("luckyMessage");
const todayDate = document.getElementById("todayDate");

const goodLuckMessages = [
  "Your effort is going to pay off. Keep going! 🌟",
  "A fresh opportunity may be closer than you think. 🍀",
  "You have everything you need to take the next step. ✨",
  "Today is a great day to believe in yourself. 💛",
  "Small wins count too. Celebrate your progress! 🎉"
];

todayDate.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

luckyButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * goodLuckMessages.length);
  luckyMessage.textContent = goodLuckMessages[randomIndex];
  luckyButton.textContent = "Show me another ✨";
});
