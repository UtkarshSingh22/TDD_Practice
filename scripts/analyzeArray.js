const isValidArray = (array) => {
    if (Array.isArray(array)) {
        for (let item of array) {
            if (typeof item !== "number") {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};

function analyzeArray(array) {
    if (!isValidArray(array)) {
        return "not a proper input";
    }
    let average = 0,
        mini = 1e9,
        maxi = -1e9;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
        mini = Math.min(mini, array[i]);
        maxi = Math.max(maxi, array[i]);
    }

    const finalRes = {
        average: average / array.length,
        min: mini,
        max: maxi,
        length: array.length,
    };

    return finalRes;
}

export default analyzeArray;
