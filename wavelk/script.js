// Splash Screen Timer
setTimeout(function () {
  document.getElementById("splash-screen").classList.add("hidden");
  document.getElementById("main-content").style.display = "block";
}, 3000); // 3 seconds

  document.getElementById("shareCard").addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "Smart Digital Business Card-Wave.lk",
        text: "Check out Smart Digital Business Card of Wave.lk Online Store",
        url: window.location.href
      }).catch(err => console.log("Share cancelled:", err));
    } else {
      // Fallback for desktop
      alert("Sharing is not supported in this browser. Please copy the link: " + window.location.href);
    }
  });

function setVh() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}
setVh();
window.addEventListener('resize', setVh);

