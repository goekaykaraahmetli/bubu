const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".tenor-gif-embed");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 💖";
  const gifContainer = document.querySelector(".tenor-gif-embed");
  
  gifContainer.innerHTML = `
    <div class="tenor-gif-embed" data-postid="11170283524009636446" data-share-method="host" data-aspect-ratio="1" data-width="100%">
      <a href="https://tenor.com/view/sseeyall-bubu-dudu-gif-11170283524009636446">Sseeyall Bubu Dudu Sticker</a>
      from <a href="https://tenor.com/search/sseeyall-stickers">Sseeyall Stickers</a>
    </div>
    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  `;
  
  // Hide the Yes button after it is clicked
  yesBtn.style.display = "none";

  // Reload the Tenor embed script to display the new GIF
  const script = document.createElement("script");
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
  
    // Generate random positions but limit them to stay inside the visible viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });
// Ensure that nothing happens on mouseover for the GIF
gif.addEventListener("mouseover", (event) => {
    event.stopPropagation(); // Stop any default or unintended actions on mouseover
});