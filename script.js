document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;
    const status = document.querySelector(".copy-status");

    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "Email скопирован";
    } catch {
      status.textContent = `Скопируйте адрес вручную: ${email}`;
    }
  });
});

