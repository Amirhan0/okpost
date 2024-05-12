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
    userImage.style.width = "58px";
    userImage.style.width = "58px";
    userImage.style.borderRadius = "50%";
  }
});