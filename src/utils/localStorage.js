const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const getItem = (key) => JSON.parse(localStorage.getItem(key));
console.log('!!!!!');
if(1==1){
  console.log('~~~~')
}






export { setItem, getItem };
