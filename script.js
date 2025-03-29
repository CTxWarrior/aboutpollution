// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// AdSense Push (Ensure ads load correctly)
window.onload = () => {
    (adsbygoogle = window.adsbygoogle || []).push({});
};