
function confirmAge() {
  localStorage.setItem("private18_age_confirmed", "true");
  document.getElementById("ageModal").style.display = "none";
}

function denyAge() {
  window.location.href = "https://www.google.com/";
}

function searchCategories() {
  const search = document
    .getElementById("search")
    .value.toLowerCase();

  const cards = document.querySelectorAll(".category-card");

  cards.forEach(card => {
    const content = card.innerText.toLowerCase();
    card.style.display = content.includes(search) ? "" : "none";
  });
}

function showMessage(category) {
  alert("Hai selezionato: " + category);
}

window.addEventListener("DOMContentLoaded", () => {
  const confirmed = localStorage.getItem(
    "private18_age_confirmed"
  );

  if (confirmed === "true") {
    document.getElementById("ageModal").style.display = "none";
  }
});
