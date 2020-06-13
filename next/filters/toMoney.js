export default function toMoney(money, currency = '$') {
  // parse negative
  var negativeSign = (money < 0) ? '-' : ''
  money = Math.abs(money)

  // to string
  let moneyString = money.toFixed()

  // parse dollars
  let dollars = moneyString.substring(0, moneyString.length - 2) || '0'
  dollars = dollars.split('').reverse().join('')
  dollars = dollars.match(/.{1,3}/g).join(',')
  dollars = dollars.split('').reverse().join('')

  // parse cents
  let cents = moneyString.substring(moneyString.length - 2)
  if (cents.length < 2) cents = `0${cents}`

  return `${negativeSign}${currency}${dollars}.${cents}`
}

