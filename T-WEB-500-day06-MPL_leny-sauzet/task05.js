function range(start, end, step=1) {
    if (step === undefined) {
        step = 1;
    }

    var res = [];
    var value = start;
    while ((value <= end && (step/Math.abs(step))===1) || (value >= end && (step/Math.abs(step))===-1)) {
        res.push(value);
        value= value + step;
    }
    return res;
}

module.exports = range;
console.log(task05.range(10,2,-1))