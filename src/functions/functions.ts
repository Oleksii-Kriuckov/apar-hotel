export function dateToNumber(dateString: string): number {
  // Extracting year, month, and day from the string
  const year = Number(dateString.substr(0, 4));
  const month = Number(dateString.substr(5, 2));
  const day = Number(dateString.substr(8, 2));

  // Creating a new Date object with the extracted values
  const date = new Date(year, month - 1, day);

  // Converting the Date object to a timestamp (number)
  const timestamp = date.getTime();

  return timestamp;
}
