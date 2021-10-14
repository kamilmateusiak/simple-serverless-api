export function getFollowingDatesComponents(startingMonth: number, startingYear: number, datesCount = 12) {
    const result = [{ month: startingMonth, year: startingYear}]

    for (let i = 1; i <= datesCount - 1; i++) {
        let month = startingMonth + i;
        let year = startingYear

        if (month > 11) {
            month = month % 11 - 1;
            year += 1;
        }

        result.push({ month, year })
    }

    return result;
}
