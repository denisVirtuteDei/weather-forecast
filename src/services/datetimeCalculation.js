export const datetimeCalculation = () => {
    let date = new Date();
    return {
        hour: date.getHours(),
        min: date.getMinutes(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
    }
}