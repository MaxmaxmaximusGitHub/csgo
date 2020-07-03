const SEPARATOR = ''

export default function toMoney(money, currency = '$') {
  const negativeSign = (money < 0) ? '-' : ''
  money = Math.abs(money)

  const moneyString = (money / 100).toString()

  let [dollars, cents = '0'] = moneyString.split('.')

  dollars = dollars.split('').reverse().join('')
  dollars = dollars.match(/.{1,3}/g).join(SEPARATOR)
  dollars = dollars.split('').reverse().join('')

  if (cents.length < 2) cents = `0${cents}`

  return `${negativeSign}${currency}${dollars}.${cents}`

}

