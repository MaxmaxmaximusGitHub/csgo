export default function classes(...args) {
  let result = ''

  for (const arg of args) {
    if (Array.isArray(arg)) {

      for (let i = 0; i < arg.length; i += 2) {
        const className = arg[i]
        const exp = arg[i + 1]
        if (exp) {
          result += ` ${className}`
        }
      }
    } else {
      result += ` ${arg}`
    }
  }

  return result
}
