function createRegistrationMessage({name, category}) {
  return `Estimado ${name}, tu registro en la categoría ${category} a sido exitoso.`;
}

function saveRegistration({name, category, email, phone}) {
  return `Registro guardado: ${name}, ${category}, ${email}, ${phone}`;
}