const grid = document.getElementById("storyGrid");
const emptyNote = document.getElementById("emptyNote");
const dialog = document.getElementById("storyDialog");
let activeFilter = "Todos";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[ch]));
}
function renderStories() {
  const filtered = stories.filter(story => activeFilter === "Todos" || story.category === activeFilter);
  grid.innerHTML = filtered.map((story, index) => `
    <article class="story-card" tabindex="0" role="button" data-id="${escapeHtml(story.id)}" aria-label="Leer ${escapeHtml(story.title)}">
      <div class="card-top"><span>${escapeHtml(story.category)}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
      <h3>${escapeHtml(story.title)}</h3>
      <p>${escapeHtml(story.excerpt)}</p>
      <div class="read-more">LEER RELATO ↗ <span> · ${escapeHtml(story.readingTime)}</span></div>
    </article>`).join("");
  emptyNote.hidden = filtered.length > 0;
}
function openStory(id) {
  const story = stories.find(item => item.id === id);
  if (!story) return;
  document.getElementById("dialogCategory").textContent = story.category;
  document.getElementById("dialogTitle").textContent = story.title;
  document.getElementById("dialogMeta").textContent = `${story.date} · ${story.readingTime} de lectura`;
  const body = document.getElementById("dialogBody");
  body.replaceChildren(...story.paragraphs.map(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    return p;
  }));
  dialog.showModal();
}
grid.addEventListener("click", event => {
  const card = event.target.closest(".story-card");
  if (card) openStory(card.dataset.id);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.classList.contains("story-card")) {
    event.preventDefault(); openStory(event.target.dataset.id);
  }
});
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderStories();
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
}));
renderStories();

// Reemplazá este email por el que quieras publicar en la sección Contacto.
const publicEmail = "tu-correo@ejemplo.com";
document.getElementById("contactLink").href =
  `mailto:${publicEmail}?subject=${encodeURIComponent("Mensaje desde ENTRE SOMBRAS")}`;
