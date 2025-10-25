const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const lovePaper = document.getElementById("lovePaper");
const textEl = document.getElementById("text");

const loveLetter = `kim cương,

A little chest, with care aligned,
To keep the sparkles love may find.
But no bright stone, no polished art,
Could hold the shine within your heart.
For you, my love, are cut so rare,
A diamond soul beyond compare.
So keep this box a token small,
Of how your light outshines it all.`;

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
