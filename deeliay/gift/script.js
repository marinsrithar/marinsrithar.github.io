document.getElementById("open-gift").addEventListener("click", () => {
  const giftContainer = document.getElementById("gift-container");
  const gift = document.getElementById("gift");
  const loader = document.getElementById("loader");
  const video = document.getElementById("video");
  const giftButton = document.getElementById("open-gift");

  // Hide the button
  giftButton.classList.add("d-none");

  // Show the gift container and GIF
  giftContainer.classList.remove("d-none");
  gift.classList.remove("d-none");

  // Wait for the GIF to end
  const gifDuration = 2700; // Adjust to match your GIF duration
  setTimeout(() => {
    gift.classList.add("d-none");

    // Show the loader
    loader.classList.remove("d-none");

    // Wait for the loader animation to finish
    const loaderDuration = 2000; // Match this to the animation duration
    setTimeout(() => {
      loader.classList.add("d-none");

      // Show the video
      video.classList.remove("d-none");
    }, loaderDuration);
  }, gifDuration);
});
