export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const result = [];
  if (start === end) {
    return result;
  }

  if (start < end) {
    let current = start - 1;
    while (current < end - 1) {
      result.push(current += 1);
    }
  }

  if (start > end) {
    let current = start + 1;
    while (current > end + 1) {
      result.push(current -= 1);
    }
  }

  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  throw new Error('Please delete this line and implement the function');
}
