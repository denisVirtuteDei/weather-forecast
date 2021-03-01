export const filteringDailyForecast = (async data => {
    return await data.list.filter((el) => el.dt_txt.includes("15:00:00"));
})