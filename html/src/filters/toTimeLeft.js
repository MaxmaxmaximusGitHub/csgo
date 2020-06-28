export default function toTimeLeft(timeLeft) {
  if (timeLeft < 0) timeLeft = 0
  const seconds = Math.ceil(timeLeft / 1000)

  return `${seconds}сек`
}



