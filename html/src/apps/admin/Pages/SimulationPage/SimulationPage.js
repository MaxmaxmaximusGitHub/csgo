import styles from './SimulationPage.styl'
import BankState from "./BankState";
import Simulation from "./Simulation";



export default function SimulationPage() {

  return <div className={styles.simulationPage}>
    <BankState/>
    <Simulation/>
  </div>
}

