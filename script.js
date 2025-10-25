const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const lovePaper = document.getElementById("lovePaper");
const textEl = document.getElementById("text");

const loveLetter = `My dearest love,

Every moment, I long for you, your presence your love and everything you bring. Lets continue this loving adventure together. 
❤️`;

function typeLetter() {
  let index = 0;
  const speed = 40;
  function type() {
    if (index < loveLetter.length) {
      textEl.textContent += loveLetter.charAt(index);
      index++;
      if (textEl.scrollHeight > lovePaper.clientHeight) {
        let scale = lovePaper.clientHeight / textEl.scrollHeight;
        lovePaper.style.transform = `scale(${Math.min(scale,1)})`;
      }
      setTimeout(type, speed);
    }
  }
  type();
}

heart.addEventListener("click", () => {
  heart.style.display = "none";
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.opacity = 0;
    envelope.style.transform = "scale(0.8)";
    lovePaper.classList.add("show");
    setTimeout(typeLetter, 500);
  }, 1200);
});
