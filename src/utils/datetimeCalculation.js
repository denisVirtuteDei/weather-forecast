const concatZero = value => value < 10 ? '0'.concat(value) : value;

export const datetimeCalculation = () => {
    let date = new Date();
    return {
        hour: concatZero(date.getHours()),
        min: concatZero(date.getMinutes()),
        day: concatZero(date.getDate()),
        month: concatZero(date.getMonth() + 1),
        year: date.getFullYear(),
    }
}