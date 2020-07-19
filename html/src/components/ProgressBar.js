import styles from './ProgressBar.styl'
import classNames from 'classnames'


export default function ProgressBar({value, className}) {

  const plainStyle = {
    width: `${value * 100}%`
  }

  const totalClassName = classNames(styles.progressBar, className)

  return <div className={totalClassName}>
    <div className={styles.plain} style={plainStyle}></div>
  </div>
}


