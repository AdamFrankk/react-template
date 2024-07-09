import type { DayOfWeek } from "@/shared/api"

export const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь"
]

export const months_part = [
  "янв.",
  "фев.",
  "март.",
  "апр.",
  "май.",
  "июнь",
  "июль",
  "авг.",
  "сен.",
  "окт.",
  "нояб.",
  "дек."
]

export const weekDaysMap: { [T in DayOfWeek]: string } = {
  MONDAY: "Понедельник",
  TUESDAY: "Вторник",
  WEDNESDAY: "Среда",
  THURSDAY: "Четверг",
  FRIDAY: "Пятница",
  SATURDAY: "Суббота",
  SUNDAY: "Воскресенье"
}
