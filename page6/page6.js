document.querySelector(".logo__text").addEventListener("click", () => {
  window.location.href = "../index.html";
});
document.addEventListener("DOMContentLoaded", () => {
  const avatarStorage = localStorage.getItem("Аватарка (ссылка)");
  const nameStorage = localStorage.getItem("Логин");

  if (nameStorage && avatarStorage) {
    const authLink = document.querySelector(".auth a");
    authLink.textContent = nameStorage;

    const userImage = document.querySelector(".auth .user");
    userImage.src = avatarStorage;
    userImage.style.width = "60px";
    userImage.style.width = "50px";
    userImage.style.borderRadius = "30px";

    const deleteBtn = document.createElement("text");
    deleteBtn.classList.add("delete-txt");
    deleteBtn.textContent = "Выйти";

    deleteBtn.addEventListener("click", () => {
      localStorage.removeItem("Логин");
      localStorage.removeItem("Аватарка (ссылка)");

      location.reload();
    });
    const authDiv = document.querySelector(".auth");
    authDiv.appendChild(deleteBtn);
  }
});
