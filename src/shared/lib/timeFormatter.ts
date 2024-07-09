export const leftTimeView = (date: string): string => {
  const month_name: { [key: number]: string } = {
    1: "января",
    2: "февраля",
    3: "марта",
    4: "апреля",
    5: "мая",
    6: "июня",
    7: "июля",
    8: "августа",
    9: "сентября",
    10: "октября",
    11: "ноября",
    12: "декабря",
  };
  const datetime = new Date(date);
  const timestamp = datetime.getTime();
  const month = month_name[new Date(timestamp).getMonth() + 1];
  const day = new Date(timestamp).getDate();
  const year = new Date(timestamp).getFullYear();
  const hour = new Date(timestamp).getHours();
  const min = new Date(timestamp).getMinutes();
  const date_ = `${day} ${month} ${year} г. в ${("00" + String(hour)).slice(
    -2
  )}:${("00" + String(min)).slice(-2)}`;
  const dif = Math.floor(Date.now() / 1000 - timestamp / 1000);

  if (dif <= 59) {
    return `${dif} сек. назад`;
  } else if (dif / 60 >= 1 && dif / 60 <= 59) {
    return `${Math.round(dif / 60)} мин. назад`;
  } else if (dif / 3600 > 1 && dif / 3600 < 23) {
    return `${Math.round(dif / 3600)} час. назад`;
  } else {
    return date_;
  }
};
