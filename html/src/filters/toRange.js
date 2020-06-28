export default function toRange(value) {
  if (value > 1) value = 1
  if (value < 0) value = 0
  return value
}

