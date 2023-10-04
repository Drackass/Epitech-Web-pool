export function objectsDeeplyEqual(cmp1, cmp2) {
    if (cmp1 === cmp2) {
      return true;
    }
  
    if (typeof cmp1 !== 'object' || typeof cmp2 !== 'object' || cmp1 === null || cmp2 === null) {
      return false;
    }
  
    const keys1 = Object.keys(cmp1);
    const keys2 = Object.keys(cmp2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !objectsDeeplyEqual(cmp1[key], cmp2[key])) {
        return false;
      }
    }
    return true
}