// Splash Screen Timer
setTimeout(function () {
  document.getElementById("splash-screen").classList.add("hidden");
  document.getElementById("main-content").style.display = "block";
}, 3000); // 3 seconds

document.getElementById("shareCard").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "My Smart Business Card",
        text: "Check out my digital business card!",
        url: window.location.href, // share the current page URL
      });
      console.log("Card shared successfully");
    } catch (err) {
      console.error("Error sharing:", err);
    }
  } else {
    alert(
      "Sharing is not supported on this browser. Please copy the link manually."
    );
  }
});
