export default function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function setValueFunc(value) {
    if (typeof value === 'object') {
      setValue(value.target.value)
    } else {
      setValue(value)
    }
  }

  return [value, setValueFunc]
}
