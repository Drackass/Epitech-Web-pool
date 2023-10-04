export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Les tableaux n'ont pas la même longueur, ils ne peuvent pas être égaux.
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // Les éléments à la même position ne sont pas égaux, donc les tableaux ne sont pas égaux.
        }
    }

    return true; // Tous les éléments ont été comparés et sont égaux, donc les tableaux sont égaux.
}