// Procedure to calculate dot product of v1 and v2
function dotProduct(v1, v2) {
  let dotProduct = 0;
  for (let i = 0; i < v1.length; i++) {
    dotProduct += v1[i] * v2[i];
  }
  return dotProduct;
}

// Algorithm to determine if two vectors are orthogonal
function areOrthogonal(v1, v2) {
  return dotProduct(v1, v2) === 0;
}

// Modify the previous algorithm
function areOrthogonal(v1, v2) {
  return (
    (function dotProduct(v1, v2) {
      let dotProduct = 0;
      for (let i = 0; i < v1.length; i++) {
        dotProduct += v1[i] * v2[i];
      }
      return dotProduct;
    })(v1, v2) === 0
  ); // call the function with the v1 v2 li medinahom f params
  //and check if ===0 return true else return false
}
