const button = document.getElementById("button");
const toasts = document.getElementById("toast");

button.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const note = document.createElement("div");
  note.classList.add("toast");
  note.classList.add("toast-default");
  note.innerText = "Added to Cart";
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};