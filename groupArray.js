/**
 * Split an array of numbers in to an array of smaller arrays of a given length.
 * Last array element may absorb remaining values.
 * Note: Pretty sure this code could be done in (almost) one line :/
 *
 * @param arrayToGroup Array: An array of integers to group in to arrays
 * @param numberOfGroups Integer: The length of the new array grouping
 */
const groupArray = (arrayToGroup, numberOfGroups) => {

  if (numberOfGroups <= 0 || numberOfGroups > arrayToGroup.length) {
    console.error(' Number of groups must be greater than 1 and no longer than length of passed array');
    return;
  }

  const numItemsInGroup = (arrayToGroup.length / numberOfGroups);
  const hasRemainder = (arrayToGroup.length % numberOfGroups !== 0);

  let groupedArray = [];

  // Move values over to our new array.
  for (let i=0; i<numberOfGroups; i++) {
    groupedArray.push(arrayToGroup.splice(0, numItemsInGroup));
  }

  // Shunt any remaining elements from the original array in to the last element of our new array.
  if (hasRemainder) {
    groupedArray[numberOfGroups -1] = groupedArray[numberOfGroups -1].concat(arrayToGroup);
  }

  return groupedArray;
};

module.exports = groupArray;