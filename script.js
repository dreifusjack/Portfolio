document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  localStorage.removeItem("savedName");
  localStorage.removeItem("savedEmail");
  localStorage.removeItem("savedMessage");

  nameInput.value = localStorage.getItem("savedName") || "";
  emailInput.value = localStorage.getItem("savedEmail") || "";
  messageInput.value = localStorage.getItem("savedMessage") || "";

  nameInput.addEventListener("input", function () {
    localStorage.setItem("savedName", nameInput.value);
  });
  emailInput.addEventListener("input", function () {
    localStorage.setItem("savedEmail", emailInput.value);
  });
  messageInput.addEventListener("input", function () {
    localStorage.setItem("savedMessage", messageInput.value);
  });
});
