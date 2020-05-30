export default function classes(...args) {
  let foundClasses = []

  for (const item of args) {
    if (typeof item === 'string') {
      foundClasses.push(item)
      continue
    }

    for (const key in item) if (item.hasOwnProperty(key)) {
      if (item[key]) {
        foundClasses.push(key)
      }
    }
  }

  return foundClasses.join(' ')
}

