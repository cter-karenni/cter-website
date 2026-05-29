// ── LANGUAGE TOGGLE ──
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "my" : "en";
  
  const toggleBtn = document.getElementById("language-toggle");
  toggleBtn.textContent = currentLang === "en" ? "မြန်မာ" : "English";

  const elements = document.querySelectorAll(".lang-text");
    elements.forEach(element => {
        if (currentLang === "my") {
            element.textContent = element.getAttribute("data-my");
            element.classList.add("lang-my");
        } else {
            element.textContent = element.getAttribute("data-en");
            element.classList.remove("lang-my");
        }
        });
}