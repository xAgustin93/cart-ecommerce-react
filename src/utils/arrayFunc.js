export const countDuplicatesItemArray = (value, array) => {
  let count = 0;
  array.forEach(arrayValue => {
    if (value == arrayValue) {
      count++;
    }
  });
  return count;
};

export const removeArrayDuplicates = array => {
  return Array.from(new Set(array));
};

export const removeItemArray = (array, item) => {
  var index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
