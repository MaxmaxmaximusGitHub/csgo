import {START_SIMULATION} from "../../graphql/mutations"
import Button from "../../../../components/Button"
import useInput from "../../../../hooks/useInput"
import {useMutation} from "@apollo/react-hooks"
import {useForm} from "react-hook-form"
import styles from './Simulation.styl'


export default function Simulation() {
  const {register, handleSubmit, watch, errors} = useForm({

  });

  const [startSimulation] = useMutation(START_SIMULATION, {
      variables:{}
  })

  function onSubmit(data) {
    console.log('data', data)
  }

  return <div className={styles.simulation}>


  </div>
}


function Field({type, name, value, onChange}) {

  return <label className={styles.field}>
    <span className={styles.label}>{name}:</span>
    <input type={type} value={value} onChange={onChange}/>
  </label>
}

