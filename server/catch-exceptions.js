function handler(error) {
  console.error(error)
}

process.on('uncaughtException', handler)
process.on('rejectionHandled', handler)
