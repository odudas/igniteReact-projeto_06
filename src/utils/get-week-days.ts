export function getWeekDays() {
  const formater = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formater.format(new Date(Date.UTC(2023, 7, day))))
    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
