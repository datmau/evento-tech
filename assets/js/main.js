document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-grid");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = form.querySelector("#first-name").value;
    const interest = form.querySelector("#interest").value;
    const email = form.querySelector("#email").value;
    const phone = form.querySelector("#phone-input").value;

    if (nombre && interest && email && phone) {
      const message = saveRegistration({
        name: nombre,
        category: interest,
        email,
        phone,
      });
      alert(message);
      form.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });

  const dia3 = document.querySelector("#dia3");
  dia3.addEventListener("mouseover", () => {
    const dia3Output = document.querySelector("#dia3-output");
    dia3Output.style.display = "flex";
  });
  dia3.addEventListener("mouseout", () => {
    const dia3Output = document.querySelector("#dia3-output");
    dia3Output.style.display = "none";
  });
});

console.log(
  createRegistrationMessage({ name: "Juan", category: "Estudiante" })
);
