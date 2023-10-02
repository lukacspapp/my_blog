export function normalizeUtc(date: Date): Date {
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
}

export function formatDate(date: Date, showYear = true): string {
  const getOrdinalNum = (n: number) =>
    n + (n > 0 ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : "")

  const day = getOrdinalNum(date.getDate())
  const month = date.toLocaleDateString("en-us", { month: "long" })
  const year = date.toLocaleDateString("en-us", { year: "numeric" })

  let result = `${month} ${day}`
  if (showYear) {
    result += ` ${year}`
  }
  return result
}

function getOrdinalSuffix(n: number): string {
  if (n > 3 && n < 21) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export function timeOfDay() {
  const date = new Date()
  const hours = date.getHours()
  if (hours < 12) {
    return 'Morning'
  } else if (hours < 18) {
    return 'Afternoon'
  } else {
    return 'Evening'
  }
}


export function na(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const formattedDay = `${day}${getOrdinalSuffix(day)}`;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${formattedDay}, ${year}`;
}