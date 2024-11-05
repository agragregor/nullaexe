function updateObjectValue(obj) {
  obj.property = 'new value';
}

const myObject = { property: 'old value' };
updateObjectValue(myObject);
console.log(myObject.property); // Output: 'new value'
