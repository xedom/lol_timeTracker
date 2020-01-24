
function addZero(num) {
    return num > 9 ? num.toString() : `0${num}`
}

function parseTime(time) {
    const minutes = ~~(time/60)
    const seconds = time - (minutes*60)

    return `${addZero(minutes)}:${addZero(seconds)}`
};

export default parseTime;