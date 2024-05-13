document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://3d97fdc2ac6a904f.mokky.dev/log");
    if (!response.ok) {
      throw new Error("Ошибка");
    }
    const usersData = await response.json();
    renderUsers(usersData);
  } catch (error) {
    alert("Ошибка при загрузке пользователей");
  }
});

function renderUsers(usersData) {
  const usersContainer = document.querySelector(
    ".people-information"
  );

  usersData.forEach((user) => {
    const usersElement = document.createElement("div");
    usersElement.classList.add("people-information-container");

    usersElement.innerHTML = `
        <div class="information">
        <p>${user.id}</p>
      </div>

      <div class="information">
        <p>${user.login}</p>
      </div>

      <div class="information">
        <p>${user.email}</p>
      </div>

      <div class="information">
        <p>${user.mainName}</p>
      </div>

      <div class="information">
        <p>${user.phoneNumber}</p>
      </div>

      <div class="information">
        <p>0</p>
      </div>

      <div class="use-use">
        <img src="../admin-users/usersimg/Handbag.svg" alt="" />
        <img src="../admin-users/usersimg/PencilLine.svg" alt="" />
        <img src="../admin-users/usersimg/Trash.svg" alt="" />
        <img src="../admin-users/usersimg/EnvelopeSimple.svg" alt="" />
      </div>

        `;
    usersContainer.appendChild(usersElement);
  });
}
