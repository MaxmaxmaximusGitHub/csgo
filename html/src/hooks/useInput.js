export default function useInput(initValue = '') {
  const [value, setValue] = useState(initValue)

  const setValueFromEvent = useCallback((event) => {
    if(typeof event !== 'object'){
      setValue(event)
      return
    }

    const input = event.target

    if (input.type === 'checkbox') {
      setValue(input.checked)
    } else {
      setValue(input.value)
    }
  }, [setValue])

  return [value, setValueFromEvent]
}
