export function countGs(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        let tru = letter === 'G';
        if(tru){
            count++;
        }
      }
    return count;
}