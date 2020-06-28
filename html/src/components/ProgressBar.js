import styles from './ProgressBar.styl'


export default function ProgressBar({value}) {

  const plainStyle = {
    width: `${value * 100}%`
  }

  return <div className={styles.progressBar}>
    <div className={styles.plain} style={plainStyle}></div>
  </div>
}


