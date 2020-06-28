export default function toDays(days = 0) {

  if (days < 7) {
    var label = ''
    if (days >= 0) label = 'Дней'
    if (days >= 1) label = 'День'
    if (days >= 2) label = 'Дня'
    if (days >= 5) label = 'Дней'
    return `${days} ${label}`
  }

  var weeks = days / 7

  if (weeks >= 0) label = 'Недель'
  if (weeks >= 1) label = 'Неделя'
  if (weeks >= 2) label = 'Недели'
  if (weeks >= 5) label = 'Недель'

  return `${weeks} ${label}`
}

