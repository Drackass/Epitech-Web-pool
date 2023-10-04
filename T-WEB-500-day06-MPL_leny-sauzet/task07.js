export function arrayFiltering(array, test = (value) => {return value % 3 === 0;}) {
    const result = array.filter((value) => test(value));
    return result

}