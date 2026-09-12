const confirmEnding = (str1, str2) => {
  if (str1.slice(-str2.length) === str2) {
    return true;
  }
  return false;
};

console.log(confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
)); 

console.log(confirmEnding(
  "He has to give me a new name",
  "name"
));
