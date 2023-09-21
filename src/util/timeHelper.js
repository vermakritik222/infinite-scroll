exports.convertDateFormat = (inputDate) => {
  const date = new Date(inputDate);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const formattedDate = `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year}`;

  return formattedDate;
};
