// find which triangle
// function takes 3 params and based on that determine whether the triangle is equilateral, isoceles or scalene

// ex : findTriangle(3, 3, 3) -> equilater

function findTriangle(x, y, z) {
  if (x == y && y == z) return "equilateral";
  else if (x == y || y == z || z == x) return "isoceles";
  else return "scalene";
}

console.log(findTriangle(3, 3, 3));
console.log(findTriangle(3, 4, 3));
console.log(findTriangle(3, 4, 5));
