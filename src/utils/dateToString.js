export const dateToString = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);
    return `${formattedDate} ${formattedTime}`;
  };

  export const formatDate = (date) => {
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  export const formatTime = (date) => {
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  };

  export const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };