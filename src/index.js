
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let arr = [];
  let tempArr = [];
  if (typeof (matrix) == "undefined") return arr;
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    } else {
        tempArr = matrix[i].reverse();
        for (j = 0; j < tempArr.length; j++) {
        arr.push(tempArr[j]);
        }
      }
  } return arr;
}
