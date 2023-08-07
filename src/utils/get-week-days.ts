interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formater = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formater.format(new Date(Date.UTC(2023, 7, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toLocaleUpperCase()
      }

      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
