import styles from './BankState.styl'
import useSimulationBank from "../../hooks/useSimulationBank";


export default function BankState() {

  const simulationBank = useSimulationBank()

  return <div className={styles.bankState}>

    {simulationBank && <div>
      bank money {simulationBank.money}
    </div>}

  </div>
}


