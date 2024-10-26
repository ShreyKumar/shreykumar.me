/**
 * Calculates the difference in years between two dates.
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns The difference in years.
 */
export function getDifferenceInYears(date1: Date, date2: Date): number {
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const day1 = date1.getDate();
    const day2 = date2.getDate();

    let yearDifference = year2 - year1;

    // Adjust for months and days
    if (month2 < month1 || (month2 === month1 && day2 < day1)) {
        yearDifference--;
    }

    return yearDifference;
}
