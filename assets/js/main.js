document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-grid');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = form.querySelector('#first-name').value;
    const interest = form.querySelector('#interest').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone-input').value;
    const comments = form.querySelector('#comments').value;

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
      alert('Por favor, completa todos los campos.');
    }

    if (comments) {
      alert(saveUserComments({ comments }));
      form.reset();
    }
  });
});

console.log(
  createRegistrationMessage({ name: 'Juan', category: 'Estudiante' })
);
