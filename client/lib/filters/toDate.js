import dateFormat from "dateformat"


export default function toDate(date, format) {
  return dateFormat(date, format)
}

