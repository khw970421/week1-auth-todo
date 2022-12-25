const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const getItem = (key) => JSON.parse(localStorage.getItem(key));
console.log("!!!!!")


console.log("double")





export { setItem, getItem };
