export const rpn = {
  additions(additions) {
    let total = 0;
    let arr = additions.split(" ")

    for (const element of arr) {
        if (arr[element] === '+') {
            let total_tmp = 0;
            total_tmp += Number.parseInt(arr[element - 1])
            total_tmp += Number.parseInt(arr[element - 2])
            arr.splice(element - 2,3,total_tmp)
            console.log(arr)
        }
        if (arr.length <= 1) {
            return total;
        }
    }
    return 1;
  },
  subtractions(subtractions) {
    return /* TODO: part 2 */ undefined;
  },
  multiplications(multiplications) {
    return /* TODO: part 3 */ undefined;
  },
  divisions(divisions) {
    return /* TODO: part 4 */ undefined;
  },
  compute(operations) {
    return /* TODO: last part !! */ undefined;
  }
};
