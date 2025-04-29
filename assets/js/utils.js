
const isOnlyLetters = (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value);
const isOnlyNumbers = (value) => /^[0-9\s]+$/.test(value);
const isValidEmail = (value) => /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

const generateUserMessage = (userName, edad, pokename, pokeweight) => {
    return `Hola ${userName}, tienes ${edad} años y tu pokemon favorito es ${pokename} con un peso de ${pokeweight}`;
}