export default function useInput(initValue) {
  const [value, setValue] = useState(initValue)

  function setValueFromEvent(event) {
    const input = event.target

    if (input.type === 'checkbox') {
      setValue(input.checked)
    } else {
      setValue(input.value)
    }
  }

  return [value, setValueFromEvent, setValue]
}
