// Splash Screen Timer
setTimeout(function () {
  document.getElementById("splash-screen").classList.add("hidden");
  document.getElementById("main-content").style.display = "block";
}, 3000); // 3 seconds

  document.getElementById("shareCard").addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "My Smart Business Card",
        text: "Check out my digital business card!",
        url: window.location.href
      }).catch(err => console.log("Share cancelled:", err));
    } else {
      // Fallback for desktop
      alert("Sharing is not supported in this browser. Please copy the link: " + window.location.href);
    }
  });
